<template>
  <div class="register_radio_li">
    <div class="payment_radio_li title_20">
      <input
        type="radio"
        :value="option"
        class="radio_class"
        name="NatureOfOrganization"
        :id="`delivery_${index + 1}`"
        @change="$emit('onInput', $event.target.value)"
        required
      />
      <label :for="`delivery_${index + 1}`">
        {{ option }}
      </label>
    </div>
  </div>
</template>

<script>
export default {
  props: ["option", "index", "required"],
};
</script>

<style lang="scss" scoped></style>
