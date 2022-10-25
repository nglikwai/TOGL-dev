<script>

import Header from "@/src/components/Common/Header";
import Footer from "@/src/components/Common/Footer";

export default {
  components: { Header, Footer },
};
</script>

<template>
  <div class="wrapper">
    <Header />
    <slot />
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
