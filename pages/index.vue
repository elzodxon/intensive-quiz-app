<template>
  <div>
    <the-header>
      <template #navigation>
        <div class="flex items-center gap-5">
          <nuxt-link
            v-for="(item, index) in navigation"
            :key="index"
            class="text-sm text-[#1A202C] font-semibold"
            :to="item.page"
            >{{ item.title }}</nuxt-link
          >
        </div>
      </template>
    </the-header>

    <div class="p-[30px]">
      <nuxt-child />
    </div>
  </div>
</template>
<script>
import TheHeader from '~/components/layout/TheHeader'
export default {
  components: { TheHeader },
  data() {
    return {
      navigation: [
        {
          title: 'Test',
          page: '/',
        },
        {
          title: 'Applicants',
          page: '/applicants',
        },
      ],
    }
  },
}
</script>
