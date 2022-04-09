<template>
  <div class="bg-white p-[30px]">
    <div class="flex items-center justify-between">
      <nuxt-link to="/" class="flex items-center gap-4">
        <slot name="icon"> </slot>
        <h3 class="text-[28px] text-black font-semibold">{{ title }}</h3>
      </nuxt-link>
      <slot name="action">
        <nuxt-link class="btn" to="/create-test"> + Create</nuxt-link>
      </slot>
    </div>

    <slot name="navigation"></slot>
  </div>
</template>

<script>
export default {
  name: 'TheHeader',
  props: {
    title: {
      type: String,
      default: 'Dashboard',
    },
  },
}
</script>
