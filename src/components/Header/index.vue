<script>
import { headerLinks } from "../../data";
import MobileHeader from "./MobileHeader";
import { mapActions } from "vuex";
import { FontSizeWrapper } from "./styledComponents";
export default {
  data() {
    return {
      headerLinks,
      isMobile: true,
      isMobileMenuShown: false,
    };
  },
  components: { MobileHeader, FontSizeWrapper },
  methods: {
    ...mapActions(["changePageScale"]),
    onSizeClick(size) {
      changePageScale(size);
    },
    toHomePage() {
      this.$router.push("/");
    },
    toggleMobileMenu() {
      this.isMobileMenuShown = !this.isMobileMenuShown;
    },
  },
  mounted() {
    if (top.innerWidth < 600) {
      this.isMobile = false;
      this.changePageScale(0.9);
    }
  },
};
</script>

<template>
  <div class="header-wrapper">
    <div class="mobile-wrapper" v-if="isMobileMenuShown === true">
      <MobileHeader @toggleMobileMenu="toggleMobileMenu()" />
    </div>

    <img :src="require('@/assets/images/logo.png')" alt="logo" />
    <span
      class="material-symbols-outlined header-button showWhenMobile"
      @click="toggleMobileMenu()"
    >
      menu
    </span>
    <div class="header-right showWhenDesktop">
      <div class="link-container">
        <nuxt-link
          :to="headerLink.link"
          class="header-link"
          v-for="headerLink in headerLinks"
          :key="headerLink.title"
        >
          {{ headerLink.title }}
        </nuxt-link>
        <FontSizeWrapper>
          <button
            class="font-size-button"
            v-for="scale in [0.8, 1, 1.3]"
            :key="scale"
            @click="changePageScale(scale)"
            :style="{ fontSize: 20 * scale + 'px', lineHeight: '84%' }"
          >
            A
          </button>
        </FontSizeWrapper>
      </div>
      <div class="header-buttons-wrapper">
        <button @click="toHomePage()">
          <span class="material-symbols-outlined header-button"> home </span>
        </button>
        <button>
          <span class="material-symbols-outlined header-button"> search </span>
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.font-size-button {
  font-size: 16px;
  color: #2079a9;
  background: transparent;
  border: none;
  cursor: pointer;
}
.header-wrapper {
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: flex-start;
  padding-right: 20px;
}

.link-container {
  display: flex;
  align-items: flex-start;
  color: #2079a9;
  padding: 10px 0 10px 0;
}

.header-right {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
}

.header-buttons-wrapper {
  display: flex;
  justify-content: flex-end;
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

.header-button:hover {
  color: white;
  background: #3b5874;
  transition: 0.3s;
}
.header-link {
  font-size: 16px;
  margin: 3px 16px 0 0;
  color: #2079a9;
  text-decoration: underline;
}

.mobile-wrapper {
  position: absolute;
  width: 100%;
  background: rgba(256, 256, 256, 0.95);
  height: 100vh;
  z-index: 9;
}
</style>
