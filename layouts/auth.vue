<template>
  <div class="container mx-auto max-w-[422px] py-6">
    <logo class="flex items-center justify-center w-full" />
    <div class="mt-[200px]">
      <nuxt />
    </div>
  </div>
</template>
<script>
import Logo from '~/components/layout/Logo'
export default {
  components: { Logo },
}
</script>
