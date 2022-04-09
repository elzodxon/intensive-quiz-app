<template>
  <div class="sidenav flex flex-col justify-between py-8">
    <div>
      <div class="px-6 py-8 mb-8">
        <logo />
      </div>

      <div class="px-6 flex flex-col gap-8">
        <nuxt-link
          v-for="(item, index) in menus"
          :key="index"
          class="text-sm font-semibold text-[#425466] flex items-center gap-3"
          :to="item.page"
          ><span :class="item.icon"></span>{{ item.title }}</nuxt-link
        >
      </div>
    </div>

    <div class="px-6 flex flex-col gap-8">
      <nuxt-link
        v-for="(item, index) in bottomMenus"
        :key="index"
        class="text-sm font-semibold text-[#425466]"
        :to="item.page"
        >{{ item.title }}</nuxt-link
      >
    </div>
  </div>
</template>

<style>
.sidenav {
  height: 100%;
  width: 251px;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: #fff;
  overflow-x: hidden;
  padding-top: 20px;
}

.nuxt-link-exact-active.nuxt-link-active {
  color: #4c6fff;
}
</style>
<script>
import Logo from '~/components/layout/Logo'
export default {
  components: { Logo },
  data() {
    return {
      menus: [
        {
          title: 'Dashboard',
          icon: 'icon-calendar',
          page: '/',
        },
        {
          title: 'Tests',
          icon: 'icon-calendar',
          page: '/tests',
        },
        {
          title: 'CRUD',
          icon: 'icon-calendar',
          page: '/crud',
        },
        {
          title: 'Contact',
          icon: 'icon-calendar',
          page: '/contact',
        },
      ],
      bottomMenus: [
        {
          title: 'Profile',
          icon: 'icon-calendar',
          page: '/profile',
        },
      ],
    }
  },
}
</script>
