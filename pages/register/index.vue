<script>
import RegisterForm from "../../src/components/RegisterForm";
import Header from "../../src/components/Header";
export default {
  name: "App",
  data() {
    return {
      title: "Title",
    };
  },
  mounted() {
    console.log("mounted");
  },
  components: { RegisterForm, Header },
};
</script>

<template>
  <div class="wrapper">
    <Header />
    <RegisterForm />
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
