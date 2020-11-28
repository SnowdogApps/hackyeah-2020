<template>
  <section class="container mx-auto mt-20">
    <div class="bg-white rounded px-8 pt-6 pb-8 mb-4 flex flex-col max-w-screen-sm mx-auto">
      <div class="mb-4">
        <label class="block text-grey-darker text-sm font-bold mb-2" for="username">
          Username
        </label>
        <input id="username" v-model="username" class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker" type="text" placeholder="Username">
      </div>
      <div class="mb-6">
        <label class="block text-grey-darker text-sm font-bold mb-2" for="password">
          Password
        </label>
        <input id="password" v-model="password" class="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3" type="password" placeholder="******************">
        <p class="text-red text-xs italic">
          Please choose a password.
        </p>
      </div>
      <div class="inline-block align-baseline text-sm text-blue hover:text-blue-darker mb-2">
        Don't have an account yet? <br class="md:hidden"> <nuxt-link to="/register" class="font-bold hover:underline">
          Register here
        </nuxt-link>
      </div>
      <div class="flex items-center justify-between">
        <button class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded" type="button" @click="login">
          Sign In
        </button>
      </div>
    </div>
  </section>
</template>

<script>

export default {
  data: () => ({
    username: '',
    password: ''
  }),

  methods: {
    async login () {
      /**
       *  TODO:
       *  - validation
       *  - move api call to services / store
       *  - success / error notifications
       *  */
      const { username, password } = this
      const logged = await this.$store.dispatch('login', {
        username, password
      })
      if (logged) {
        this.$router.push('/')
      } else {
        // handle error
      }
    }
  }
}
</script>
