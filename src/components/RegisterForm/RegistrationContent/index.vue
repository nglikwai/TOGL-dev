<template>
  <div>
    <div class="clear"></div>
    <div class="register_centent">
      <RegistrationQuestion
        v-for="(content, index) in question.content"
        :index="index"
        :key="content"
        :content="content"
        :length="question.length"
        :fontSize="question.fontSize"
        :type="question.type"
        :line="question.line"
        :label="question.label && question.label[index]"
        :required="question.required !== false"
        @onInput="(e) => $emit('onInput', { answer: e, index })"
      />
    </div>
  </div>
</template>

<script>
import RegistrationQuestion from "../RegistrationQuestion";
export default {
  components: { RegistrationQuestion },
  props: ["question"],
};
</script>

<style lang="scss" scoped></style>
