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
        <auth-form has-name has-password2 @on-auth="onRegister" />

        <nuxt-link :to="localePath('/login')">Login</nuxt-link>
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
    async onRegister(data) {
      await this.$axios
        .$post('/api/v1/registration/', data)
        .then(() => this.$router.push('/login'))
        .catch((err) => {
          const error = err.response.data
          console.log(error)

          if (error.email) {
            this.$toast(`Bunday email mavjud`)
          }
        })
    },
  },
}
</script>
