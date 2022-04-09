<template>
  <form class="form">
    <div
      v-if="hasName"
      class="form-group"
      :class="{ 'form-group--error': $v.user.full_name.$error }"
    >
      <label class="label" for="name">Full name:</label>
      <input
        id="name"
        v-model="$v.user.full_name.$model"
        class="input"
        type="text"
        placeholder="Enter your name"
        required
      />
    </div>
    <div
      class="form-group"
      :class="{ 'form-group--error': $v.user.email.$error }"
    >
      <label class="label" for="name">Email:</label>
      <input
        id="email"
        v-model="$v.user.email.$model"
        class="input"
        type="text"
        placeholder="Enter your name"
      />
    </div>
    <div
      class="form-group"
      :class="{ 'form-group--error': $v.user.password.$error }"
    >
      <label class="label" for="name">Password:</label>
      <input
        id="password"
        v-model="$v.user.password.$model"
        class="input"
        type="text"
        required
        placeholder="Enter your name"
      />
    </div>
    <div
      v-if="hasPassword2"
      class="form-group"
      :class="{ 'form-group--error': $v.user.password2.$error }"
    >
      <label class="label" for="name">Reenter password:</label>
      <input
        id="password2"
        v-model="$v.user.password2.$model"
        class="input"
        type="text"
        placeholder="Enter your name"
      />
    </div>
    <button class="btn" @click.prevent="onAuth">{{ title }}</button>
  </form>
</template>

<script>
import { required, email, minLength } from 'vuelidate/lib/validators'
export default {
  props: {
    hasName: {
      type: Boolean,
      default: false,
    },
    hasPassword2: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      default: 'Register',
    },
  },
  data() {
    return {
      user: {
        full_name: '',
        email: '',
        password: '',
        password2: '',
      },
    }
  },
  validations: {
    user: {
      full_name: {},
      email: {
        required,
        email,
      },
      password: {
        required,
        minLength: minLength(8),
      },
      password2: {
        minLength: minLength(8),
      },
    },
  },
  methods: {
    onAuth() {
      this.$v.$touch()

      if (!this.$v.$invalid) {
        this.$emit('on-auth', this.user)
      } else {
        console.log('t')
      }
    },
  },
}
</script>
