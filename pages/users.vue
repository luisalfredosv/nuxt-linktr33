<template>
  <section class="container">
    <div>
      <Logo />
      <h1 class="title">
        USERS
      </h1>
      <ul class="users">
        <li v-for="(user, index) in users" :key="index" class="user">
          <nuxt-link :to="{ name: 'users-id', params: { id: index }}">
            {{ user.name }}
          </nuxt-link>
        </li>
      </ul>
      <nuxt-link class="button" to="/">
        Homepage
      </nuxt-link>
    </div>
  </section>
</template>

<script>
export default {
  async asyncData ({ $http }) {
    const data = await $http.$get('/api/users')
    return { users: data }
  },
  head () {
    return {
      title: 'Users'
    }
  }
}
</script>