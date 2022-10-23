<template>
  <div class="register_Upload_table_li">
    {{ tag
    }}<i
      @click="$emit('deleteTag', tag)"
      class="layui-icon layui-icon-close"
    ></i>
  </div>
</template>

<script>
export default {
  props: ["tag"],
};
</script>

<style lang="scss" scoped></style>
