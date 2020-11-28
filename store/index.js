import Vuex from 'vuex'
import { login, register } from '~/graphql/mutations'

const Cookie = process.client ? require('js-cookie') : undefined
const cookieparser = process.server ? require('cookieparser') : undefined

const actions = {
  nuxtServerInit ({ commit }, { req }) {
    let auth = null
    if (req.headers.cookie) {
      const parsed = cookieparser.parse(req.headers.cookie)
      try {
        auth = JSON.parse(parsed.auth)
      } catch (err) {
        // No valid cookie found
      }
    }
    commit('setUser', auth)
  },

  async register (_, payload) {
    try {
      const { data } = await this.$axios({
        url: '/graphql',
        method: 'post',
        data: {
          query: register,
          variables: {
            input: { ...payload }
          }
        }
      })
      const { data: res } = data
      if (res.register && res.register.user) {
        return true
      } else {
        throw new Error('couldn\'t create user')
      }
    } catch (error) {
      console.error(error)
    }
  },

  async login ({ commit }, payload) {
    try {
      const { data } = await this.$axios({
        url: '/graphql',
        method: 'post',
        data: {
          query: login,
          variables: {
            input: { identifier: payload.username, password: payload.password }
          }
        }
      })
      const { data: res } = data
      if (res && res.login) {
        commit('setUser', res.login.jwt)
        return true
      } else {
        throw new Error('couldn\'t login')
      }
    } catch (error) {
      console.error(error)
    }
  },

  logout ({ commit }) {
    commit('logout')
  }
}

export const mutations = {
  setUser (state, token) {
    debugger
    // localStorage.setItem(TOKEN_ITEM_KEY, token)
    Cookie.set('auth', token)
    state.user = token
  },

  logout () {
    // localStorage.removeItem(TOKEN_ITEM_KEY)
    Cookie.remove('auth')
    window.location.reload()
  }
}

const createStore = () => {
  return new Vuex.Store({
    state: () => ({
      user: null
    }),
    mutations,
    actions
  })
}

export default createStore
