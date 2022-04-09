<template>
  <div>
    <the-header>
      <template #icon>
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20 8L12 16L20 24"
            stroke="#27272E"
            stroke-width="3"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </template>
      <template #action>
        <button class="btn" @click="save">Save</button>
      </template>
    </the-header>

    <div class="p-[30px] flex flex-col gap-[30px]">
      <test-create-banner @on-click="onAdd" />
      <div class="form-group">
        <label class="label">Test nomini kiriting</label>
        <input v-model="title" class="input" type="text" />
      </div>
      <test-creator
        v-for="(data, index) in allData"
        :key="index"
        ref="allData"
        class="mt-5 inline-block w-full"
        :data="data"
        @on-delete="onDelete(index)"
      />
    </div>
  </div>
</template>

<script>
import TheHeader from '~/components/layout/TheHeader'
import TestCreateBanner from '~/components/test/TestCreateBanner'
import TestCreator from '~/components/test/TestCreator'
export default {
  name: 'CreateTest',
  components: { TestCreator, TestCreateBanner, TheHeader },
  data() {
    return {
      allData: [],
      title: '',
      json: {
        title: 'Test birinchi',
        is_active: true,
        test_question: [
          {
            type: 'radio',
            content: "bir bor ekan bir yo'q ekan",
            has_correct_answer: true,
            variants: [
              { content: 'bu ertak', is_answer: true },
              { content: "bu qo'shiq" },
            ],
          },
        ],
      },
    }
  },
  methods: {
    onAdd() {
      const quiz = {
        content: '',
        type: 'radio',
        variants: [{ content: '', key: Math.random(), is_answer: false }],
        has_correct_answer: false,
      }
      this.allData.push(quiz)
    },
    onDelete(index) {
      this.allData.splice(index, 1)
    },
    save() {
      const data = {
        title: this.title,
        is_active: true,
        test_question: this.allData,
      }
      this.$axios
        .$post('/api/v1/test/', data)
        .then((res) => {
          this.$toast('testingiz muvaffaqiyatli qoshildi.')
          this.allData = []
          this.title = ''
        })
        .catch((err) => console.log(err))
    },
  },
}
</script>
