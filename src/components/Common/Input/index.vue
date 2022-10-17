<template>
  <div class="wrapper">
    <input
      v-bind:value="data"
      @input="$emit('input', $event.target.value)"
      :type="question.type"
      :class="question.class || 'register-input'"
      v-for="item in question.line === 2 ? 2 : 1"
      :style="question.style"
    />
    <SelectMenu v-if="question.element === 'select'" />
  </div>
</template>

<script>
import SelectMenu from "../../Common/SelectMenu";

export default {
  data() {
    return {
      value: "",
    };
  },
  components: { SelectMenu },
  props: ["data", "question"],
  methods: {
    onInput(e) {
      console.log(e);
    },
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  width: 100%;
}
.register-input {
  background: #ecf6fb;
  border: #3d9dd1 solid 1px;
  padding: 4px 10px;
  margin: 0 10px;
  border-radius: 8px;
  height: 45px;
  width: 100%;
  max-width: 550px;
  color: #00325c;
  font-size: 20px;
  margin-bottom: 12px;
}

.register-input:focus {
  border: #2a79a9 solid 1px;
}
</style>
