<template>
  <div>
    <h1 class="title">USERS</h1>
    <ul v-show="users" class="users">
      <li v-for="(user, index) of users" :key="index" class="user">
        <pre>
          {{ user }}
        </pre>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  async asyncData({ $axios }) {
    // eslint-disable-next-line no-console
    // console.log(app)
    try {
    //  const { data } = await $axios.get('https://jsonplaceholder.typicode.com/todos');
     const { data }  = await $axios.get('/api/users');


      // eslint-disable-next-line no-console
      console.error('resp ', data);

      return {
        users: data
      }
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('Err ', error);
    }
  },
  head() {
    return {
      title: 'Users'
    }
  },
}
</script>