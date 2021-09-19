<template>
  <div
    class="
      relative
      flex
      items-top
      justify-center
      min-h-screen
      bg-gray-100
      sm:items-center
      sm:pt-0
    "
  >
    <div
      class="
        bg-white
        dark:bg-gray-800
        rounded-tl-xl
        sm:rounded-t-xl
        p-4
        pb-6
        sm:p-8
        lg:p-4
        lg:pb-6
        xl:p-8
        space-y-6
        sm:space-y-8
        lg:space-y-6
        xl:space-y-8
      "
    >
      <form @submit.prevent="login">
        <div class="space-y-6">
          <h2>Sign in to your Linktree account</h2>
          <input
            v-model="formLogin.email"
            class="
              focus:border-light-blue-500
              focus:ring-1 focus:ring-light-blue-500
              focus:outline-none
              w-full
              text-sm text-black
              placeholder-gray-500
              border border-gray-200
              rounded-md
              py-2
              px-2
            "
            type="text"
            aria-label="Your email"
            placeholder="Your email"
          />

          <input
            v-model="formLogin.password"
            class="
              focus:border-light-blue-500
              focus:ring-1 focus:ring-light-blue-500
              focus:outline-none
              w-full
              text-sm text-black
              placeholder-gray-500
              border border-gray-200
              rounded-md
              py-2
              px-2
            "
            type="password"
            aria-label="Your password"
            placeholder="Your password"
          />
        </div>

        <div class="flex space-x-3 mb-4 text-sm font-medium mt-5">
          <div class="flex-auto flex space-x-3">
            <button
              type="submit"
              class="
                border
                w-full
                items-center
                justify-center
                flex
                border-light-blue-500
                text-light-blue-500
                rounded-md
                px-4
                py-2
                transition
                duration-500
                ease
                select-none
                hover:text-white
                hover:bg-light-blue-600
                focus:outline-none
                focus:shadow-outline
              "
            >
              Login
            </button>
          </div>
        </div>
        <div class="flex space-x-3 mb-4 text-sm font-medium mt-5">
          <p class="text-sm text-gray-500">
            Don't have an account? <NuxtLink to="/signin">Create one</NuxtLink>
          </p>
          <p class="text-sm text-gray-500">
            <NuxtLink to="/">Forgot password?</NuxtLink>
          </p>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formLogin: {
        email: 'test@test.com',
        password: '123456',
      },
    }
  },
  methods: {
    async login() {
      try {

        const response = await this.$auth.loginWith("local", this.formLogin);
        // this.$router.push("/");
        // eslint-disable-next-line no-console
        console.log(response);
        alert(response)
        // eslint-disable-next-line no-console
      } catch (err) {
        // eslint-disable-next-line no-console
        console.log(err)
      }
    },
  },
}
</script>

<style>
</style>