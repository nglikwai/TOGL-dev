<script>
import RegisterForm from "../../src/components/RegisterForm.vue";
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

<style>
@font-face {
  font-family: Hind Madurai Light;
  src: url("./assets/font/HindMadurai-Light.ttf") format("truetype");
}

@font-face {
  font-family: Hind Madurai Medium;
  src: url("./assets/font/HindMadurai-Medium.ttf") format("truetype");
}

@font-face {
  font-family: Hind Madurai Regular;
  src: url("./assets/font/HindMadurai-Regular.ttf") format("truetype");
}

@font-face {
  font-family: Hind Madurai SemiBold;
  src: url("./assets/font/HindMadurai-SemiBold.ttf") format("truetype");
}

@font-face {
  font-family: Hind Madurai Bold;
  src: url("./assets/font/HindMadurai-Bold.ttf") format("truetype");
}

::-webkit-scrollbar {
  width: 0px;
}
</style>
<style scoped>
.wrapper {
  font-family: Hind Madurai Regular;
  background: #d8ecf4;
  background-image: url("../../assets/images/background.png");
  background-position: center;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
