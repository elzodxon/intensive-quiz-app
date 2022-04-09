<template>
  <div>
    <test-solver
      v-for="(item, index) in test.test_question"
      :key="index"
      :data="item"
    />

    <button @click="finishTest">Yakunlash</button>
  </div>
</template>

<script>
import TestSolver from '~/components/test/TestSolver'
export default {
  components: { TestSolver },
  fetch() {
    const route = this.$route.params.id

    this.$axios
      .$get(`/api/v1/test/${route}`)
      .then((res) => (this.test = res.data))
  },
  data() {
    return {
      test: {},
    }
  },
  methods: {
    finishTest() {
      this.$axios
        .$post('/api/v1/test/check/', this.test)
        .then((res) => console.log(res))
    },
  },
}
</script>
