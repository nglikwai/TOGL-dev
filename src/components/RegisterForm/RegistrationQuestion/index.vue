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
        :class="`register_li_input layui-form ${error && 'register_li_error'}`"
      >
        <input
          v-bind:value="data"
          @input="$emit('onInput', $event.target.value)"
          :type="type"
          class="form-input"
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
  },
};
</script>

<style lang="scss" scoped></style>
