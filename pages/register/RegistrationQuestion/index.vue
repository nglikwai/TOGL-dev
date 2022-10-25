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
        :class="`register_li_input layui-form ${
          error && 'register_li_error'
        } ${styles}`"
        @click="clearError()"
      >
        <input
          v-bind:value="data"
          @input="$emit('onInput', $event.target.value)"
          :type="type"
          class="form-input"
          :required="isRequired"
          :id="question.id"
          @change="(e) => setValue(e)"
        />
        <i v-if="error" class="fa fa-exclamation-circle"></i>
        <i v-if="question.icon" :class="`fa fa-${question.icon}`"></i>
      </div>
      <div v-if="line === 2" class="register_li_input padding_10">
        <input :type="type" class="form-input" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return { error: false, value: "" };
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
    styles: String,
    question: Object,
  },
  methods: {
    clearError() {
      this.error = false;
    },
    setValue(e) {
      this.value = e.target.value;
    },
  },

  watch: {
    isSubmited: function () {
      if (this.isRequired && this.value === "") {
        this.error = true;
      }
    },
  },

  computed: {
    ...mapState("register", ["isSubmited"]),
    isRequired() {
      return !this.content.includes("Optional") === true;
    },
  },
};
</script>

<style lang="scss" scoped></style>
