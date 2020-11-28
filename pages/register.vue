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
        <label class="block text-grey-darker text-sm font-bold mb-2" for="email">
          Email
        </label>
        <input id="email" v-model="email" class="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3" type="email" placeholder="user@mail.com">
        <p class="text-red text-xs italic">
          Please choose a password.
        </p>
      </div>
      <div class="mb-6">
        <label class="block text-grey-darker text-sm font-bold mb-2" for="password">
          Password
        </label>
        <input id="password" v-model="password" class="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3" type="password" placeholder="******************">
      </div>
      <div class="mb-6">
        <label class="block text-grey-darker text-sm font-bold mb-2" for="confirmPassword">
          Confirm password
        </label>
        <input id="confirmPassword" v-model="confirmPassword" class="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3" type="password" placeholder="******************">
        <p class="text-red text-xs italic">
          Please confirm password.
        </p>
      </div>
      <div class="inline-block align-baseline text-sm text-blue hover:text-blue-darker mb-2">
        Already have an account? <nuxt-link to="/login" class="font-bold hover:underline">
          Log in
        </nuxt-link>
      </div>
      <div class="flex items-center justify-between">
        <button class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded" type="button" @click="register">
          Register
        </button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  asyncData ({ $config }) {
    return {
      api: $config.api
    }
  },

  data: () => ({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  }),

  methods: {
    async register () {
      //  TODO: validation
      const { username, email, password, confirmPassword } = this
      if (password !== confirmPassword) {
        alert('Confirm password must be the same as password')
        return
      }

      const registered = await this.$store.dispatch('register', { username, email, password })
      if (registered) {
        this.$router.push('/login')
      } else {
        // handle error
      }
    }
  }
}
</script>
