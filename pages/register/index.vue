<script>
import RegisterForm from "@/src/components/RegisterForm";
import Header from "@/src/components/Header";
import Footer from "@/src/components/Common/Footer";

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
  components: { RegisterForm, Header, Footer },
};
</script>

<template>
  <div class="wrapper">
    <Header />
    <RegisterForm />
    <Footer />
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
