<template>
  <div>
    <div class="mb-5 text-center">
      <slot name="icon"></slot>
      <h3 class="text-[28px] text-black font-semibold mb-3">
        {{ data.title }}
      </h3>
      <p class="text-base text-black">{{ data.text }}</p>
    </div>

    <slot name="form"></slot>
  </div>
</template>

<script>
export default {
  name: 'AuthContainer',
  props: {
    data: {
      type: Object,
      default: () => {},
    },
  },
}
</script>
