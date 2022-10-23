<template>
  <div class="register_radio_li">
    <div class="payment_radio_li title_20">
      <input
        type="radio"
        class="radio_class"
        name="delivery_radio"
        :id="`delivery_${index + 1}`"
      />
      <label :for="`delivery_${index + 1}`">
        {{ option }}
      </label>
    </div>
  </div>
</template>

<script>
export default {
  props: ["option", "index"],
};
</script>

<style lang="scss" scoped></style>
