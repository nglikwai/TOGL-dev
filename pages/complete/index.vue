<script>
import Wrapper from "@/src/components/Common/Wrapper";
export default {
  components: { Wrapper },
  name: "IndexPage",
};
</script>
<template>
  <Wrapper>
    <nuxt-link to="/">complete the registration</nuxt-link>
  </Wrapper>
</template>

<style scoped>
.wrapper {
  height: 100vh;
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
