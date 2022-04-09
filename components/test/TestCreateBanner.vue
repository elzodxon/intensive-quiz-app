<template>
  <div
    class="bg-[#4c6fff] py-5 px-6 flex items-center justify-between"
    style="
      box-shadow: 0 0 1px rgba(12, 26, 75, 0.24),
        0 3px 8px -1px rgba(50, 50, 71, 0.05);
      border-radius: 16px;
    "
  >
    <div>
      <h3 class="text-[24px] text-white font-semibold mb-2.5">Test qo'shish</h3>
      <p class="text-base text-white">
        Ariza topshiruvchining bilim va ko'nikmalarini tekshirish uchun savollar
        formasini yarating
      </p>
    </div>
    <create-button class="btn-white" @on-click="$emit('on-click')" />
  </div>
</template>
<script>
import CreateButton from '~/components/library/button/CreateButton'
export default {
  components: { CreateButton },
}
</script>
