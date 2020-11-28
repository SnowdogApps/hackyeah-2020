<template>
  <section class="container mx-auto">
    <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col">
      <div class="mb-4">
        <label class="block text-grey-darker text-sm font-bold mb-2" for="username">
          Username
        </label>
        <input v-model="username" id="username" class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker" type="text" placeholder="Username">
      </div>
      <div class="mb-6">
        <label class="block text-grey-darker text-sm font-bold mb-2" for="password">
          Password
        </label>
        <input v-model="password" id="password" class="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3" type="password" placeholder="******************">
        <p class="text-red text-xs italic">
          Please choose a password.
        </p>
      </div>
      <div class="flex items-center justify-between">
        <button class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded" type="button" @click="login">
          Sign In
        </button>
        <a class="inline-block align-baseline font-bold text-sm text-blue hover:text-blue-darker" href="#">
          Forgot Password?
        </a>
      </div>
    </div>
  </section>
</template>

<script>
const loginQuery = `mutation login(
    $identifier: String!
    $password: String!
  ) {
    login(
        identifier: $identifier
        password: $password
    ) {
      jwt
    }
  }
`
export default {
  asyncData ({ $config }) {
    return {
      api: $config.strapiUrl
    }
  },

  data: () => ({
    username: '',
    password: ''
  }),

  methods: {
    async login () {
      const { username, password } = this
      try {
        debugger
        const { data } = await this.$axios({
          url: `${this.api}/graphql`,
          method: 'get',
          params: {
            query: loginQuery,
            variables: {
              identifier: username, password
            }
          }
        })
        debugger
        console.log(data)
      } catch (error) {
        debugger
      }
    }
  }
}
</script>
