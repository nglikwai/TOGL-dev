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
        @click="clearError()"
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
import { mapState } from "vuex";
export default {
  data() {
    return { error: false };
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
  },
  methods: {
    clearError() {
      this.error = false;
      // const target = e.path[1];
      // target.classList.remove("register_li_error");
      // if (target.children[1]) {
      //   target.removeChild(target.children[1]);
      // }
    },
  },
  computed: mapState(["isSubmited"]),
  mounted() {
    console.log(this.isSubmited);
  },
  watch: {
    isSubmited: function () {
      this.error = true;
    },
  },

  // computed: {
  //   // error() {
  //   //   return (
  //   //     this.$store.state.isSubmited &&
  //   //     !this.content.includes("Optional") &&
  //   //     $event.target.value == ""
  //   //   );
  //   // },
  // },
};
</script>

<style lang="scss" scoped></style>
