<script>
import Header from "../../src/components/Header";
export default {
  components: { Header },
  name: "IndexPage",
};
</script>
<template>
  <div class="wrapper">
    <nuxt-link to="/register">Register</nuxt-link>
  </div>
</template>

<style scoped>
.wrapper {
  height: 100vh;
  background-image: url("../../assets/images/background.png");
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: #00325c;
  font-size: 40px;
}

a {
  background: #ecf6fb;
  border: #3d9dd1 solid 1px;
  padding: 4px 10px;
  margin: 0 10px;
  border-radius: 8px;
}
</style>
