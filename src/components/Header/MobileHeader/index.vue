<template>
  <div>
    <div class="header-wrapper">
      <div class="heading">
        <span></span>
        <span
          class="material-symbols-outlined header-button"
          @click="$emit('toggleMobileMenu')"
        >
          close
        </span>
      </div>

      <nuxt-link
        :to="headerLink.link"
        class="header-link"
        v-for="headerLink in headerLinks"
        :key="headerLink.title"
      >
        {{ headerLink.title }}
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import { headerLinks } from "../../../data";

export default {
  data() {
    return {
      headerLinks,
    };
  },
};
</script>

<style scoped>
.header-wrapper {
  padding: 20px;
  display: flex;
  flex-direction: column;
}

.header-link {
  padding: 20px 10px;
  font-size: 30px;
  color: #3b5974;
}
.heading {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.header-button {
  border: none;
  padding: 4px 16px;
  display: flex;
  justify-content: center;
  color: #3b5874;
  background: white;
  border-radius: 3rem;
  margin-left: 8px;
  cursor: pointer;
  margin-top: 10px;
}
</style>
