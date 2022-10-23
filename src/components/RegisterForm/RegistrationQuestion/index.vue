<template>
  <div :class="`register_${length}`">
    <div :class="`register_txt_label title_${fontSize}`">
      {{ content }}
    </div>
    <div class="register_li">
      <div v-if="label" class="register_li_label">
        {{ label }}
      </div>
      <div
        :class="`register_li_input layui-form`"
        @click="(e) => clearError(e)"
      >
        <input
          v-bind:value="data"
          @input="$emit('onInput', $event.target.value)"
          :type="type"
          class="form-input"
          :required="!content.includes('Optional') === true"
        />
        <i v-if="error" class="fa fa-exclamation-circle"></i>
      </div>
      <div v-if="line === 2" class="register_li_input padding_10">
        <input :type="type" class="form-input" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      error: false,
    };
  },
  props: {
    data: Function,
    content: String,
    length: {
      type: Number,
      default: 50,
    },
    fontSize: {
      type: Number,
      default: 24,
    },
    type: {
      type: String,
      default: "text",
    },
    line: Number,
    label: String,
    index: Number,
    required: Boolean,
    answer: Object,
  },
  methods: {
    clearError(e) {
      const target = e.path[1];
      target.classList.remove("register_li_error");
      if (target.children[1]) {
        target.removeChild(target.children[1]);
      }
    },
  },
  updated() {
    if (this.answer[this.content] === "") {
      this.error = true;
    }
  },
};
</script>

<style lang="scss" scoped></style>
