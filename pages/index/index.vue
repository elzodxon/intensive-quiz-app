<template>
  <div>
    <div class="grid grid-cols-12 gap-[30px]">
      <test-card
        v-for="(item, index) in tests"
        :key="index"
        :data="item"
        class="col-span-4"
      />
    </div>
  </div>
</template>

<script>
import TestCard from '~/components/test/TestCard'
export default {
  components: { TestCard },
  fetch() {
    this.getTests()
  },
  data() {
    return {
      tests: [],
    }
  },

  methods: {
    getTests() {
      this.$axios
        .$get('/api/v1/test/')
        .then((res) => {
          this.tests = res.results
        })
        .catch((err) => console.log(err))
    },
  },
}
</script>
