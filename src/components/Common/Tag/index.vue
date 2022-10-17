<template>
  <div class="tag-wrapper">
    {{ tag }}
    <button @click="$emit('deleteTag', tag)">
      <span class="material-symbols-outlined"> close </span>
    </button>
  </div>
</template>

<script>
export default {
  props: {
    tag: String,
  },
};
</script>

<style scoped>
.tag-wrapper {
  background: #ecf6fb;
  border: #3d9dd1 solid 1px;
  padding: 4px 10px;
  margin: 10px;
  border-radius: 8px;
  height: 40px;
  color: #3b5874;
  font-size: 20px;
}

.tag-wrapper button {
  color: #3d9dd1;
  background: transparent;
  border: none;
  padding-left: 20px;
  display: flex;
  align-items: center;
  transition: 0.4s;
}

.tag-wrapper button:hover {
  color: red;
  background: transparent;
  border: none;
  padding-left: 20px;
  display: flex;
  align-items: center;
}
</style>
