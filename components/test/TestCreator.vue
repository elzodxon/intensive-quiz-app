<template>
  <div class="bg-white p-[30px] rounded-2xl">
    <!--title-->
    <div class="flex items-center justify-end gap-5">
      <div>
        <button class="btn" @click="onAdd">Yana qo'shish</button>
        <button class="btn" @click="$emit('on-delete')">Delete</button>
      </div>
    </div>

    <div class="form-group mb-0">
      <label class="label">Savol nomi</label>
      <input
        v-model="data.content"
        class="input"
        type="text"
        placeholder="Savol nomini kiriting"
        required
      />
    </div>
    <!--main body-->
    <div class="mt-3 mob:mt-5">
      <div class="form-group">
        <div
          v-for="(field, index) in data.variants"
          :key="field.key"
          class="flex gap-1.5 relative items-center"
        >
          <label>
            <input
              :value="field.is_answer"
              :name="field.key"
              :checked="field.is_answer"
              type="radio"
              @change="onChangeRadio($event, index)"
            />
          </label>
          <input
            v-model="field.content"
            class="input w-full"
            type="text"
            placeholder="Javobni kiriting"
            required
          />
          <svg
            v-if="data.variants[0].key !== field.key"
            class="ml-1.5 flex-shrink-0 cursor-pointer"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            @click="onDelete(index)"
          >
            <path
              d="M15 5L5 15"
              stroke="#8E9BA8"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M5 5L15 15"
              stroke="#8E9BA8"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  model: {
    prop: 'data',
    event: 'change',
  },
  props: {
    data: {
      type: Object,
      default() {
        return {
          content: '',
        }
      },
    },
  },

  methods: {
    onDelete(index) {
      this.data.variants.splice(index, 1)
    },
    onAdd() {
      if (this.data.variants.length < 10) {
        this.data.variants = [
          ...this.data.variants,
          { content: '', key: Math.random(), is_answer: false },
        ]
      }
    },
    onChangeRadio(e, idx) {
      this.data.variants.forEach((el) => (el.is_answer = false))
      this.data.variants[idx].is_answer = true
    },
  },
}
</script>
