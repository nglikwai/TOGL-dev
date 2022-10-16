<template>
  <select class="select-wrapper">
    <option v-for="item in [1, 2, 3]" :key="item">Option {{ item }}</option>
  </select>
</template>

<script>
export default {};
</script>

<style scoped>
.select-wrapper {
  background: #ecf6fb;
  border: #3d9dd1 solid 1px;
  padding: 4px 10px;
  margin: 0 10px;
  border-radius: 8px;
  height: 45px;
  width: 100%;
  max-width: 280px;
  color: #00325c;
  font-size: 20px;
  margin-bottom: 12px;
}
</style>
