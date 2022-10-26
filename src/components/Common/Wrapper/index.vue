<script>

import Header from "@/src/components/Common/Header";
import Footer from "@/src/components/Common/Footer";

export default {
  components: { Header, Footer },
};
</script>

<template>
  <div class="theme-wrapper">
    <div class="register_bg"></div>
    <Header />
    <slot />
    <Footer />
  </div>
</template>

<style lang="scss" scoped>
.theme-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100vh;
}
</style>
