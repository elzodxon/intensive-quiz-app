<template>
  <div class="bg-[#E5E5E5] w-full min-h-screen h-full">
    <sidebar />

    <div class="main">
      <nuxt />
    </div>
  </div>
</template>
<script>
import Sidebar from '~/components/layout/Sidebar'
export default {
  name: 'DefaultLayout',
  components: { Sidebar },
}
</script>
<style>
.main {
  margin-left: 251px;
  padding: 0 3px;
}
</style>
