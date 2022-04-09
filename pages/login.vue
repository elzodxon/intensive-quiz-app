<template>
  <div>
    <auth-container
      :data="{
        title: 'Welcome back!',
        text: 'Let`s build something great',
      }"
    >
      <template #icon>
        <span class="text-3xl mb-[30px] block">👋</span></template
      >
      <template #form>
        <auth-form title="Login" @on-auth="onLogin" />
        <nuxt-link :to="localePath('/register')">register</nuxt-link>
      </template>
    </auth-container>
  </div>
</template>

<script>
export default {
  name: 'Login',
  auth: 'guest',
  layout: 'auth',
  data() {
    return {
      user: {
        email: 'elzodxon@gmail.com',
        password: 'parol123',
      },
    }
  },
  methods: {
    async onLogin(data) {
      return await this.$auth
        .loginWith('local', {
          data,
        })
        .then((res) => console.log(res))
        .catch((err) => {
          const error = err.response.data

          if (error.detail) {
            this.$toast(error.detail)
          }
        })
    },
  },
}
</script>
