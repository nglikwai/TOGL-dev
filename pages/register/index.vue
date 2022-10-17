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
    <!-- <Button @click="loginAction(this.$store.state.login.username)">hi</Button> -->
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  font-family: Hind Madurai Regular;
  background: #d8ecf4;
  background-image: url("../../assets/images/background.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
