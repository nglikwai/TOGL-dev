<script>
import { headerLinks } from "../../data";
import MobileHeader from "./MobileHeader";
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";
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

    <img :src="require('../../../assets/images/logo.png')" alt="logo" />
    <span
      class="material-symbols-outlined header-button"
      v-if="isMobile === false"
      @click="toggleMobileMenu()"
    >
      menu
    </span>
    <div class="header-right" v-if="isMobile === true">
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
            @click="changePageScale(0.8)"
            style="font-size: 16px; line-height: 16px"
          >
            A
          </button>
          <button
            class="font-size-button"
            @click="changePageScale(1)"
            style="font-size: 20px; line-height: 17px"
          >
            A
          </button>
          <button
            class="font-size-button"
            @click="changePageScale(1.3)"
            style="font-size: 26px; line-height: 21px"
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
@import "https://fonts.googleapis.com/icon?family=Material+Icons";
@import "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,1,0";
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
