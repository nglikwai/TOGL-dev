<template>
  <header class="wrapper">
    <div class="top">
      <div class="top_width">
        <div class="top_logo">
          <nuxt-link to="#"><img src="@/assets/images/logo.png" /></nuxt-link>
        </div>
        <div class="top_right">
          <div class="top_right_text">
            <nuxt-link to="/register">FAQ</nuxt-link>
            <nuxt-link to="/contact">Contact</nuxt-link>
            <nuxt-link to="/sitemap">Site Map</nuxt-link>
            <div class="top_right_get">
              <nuxt-link to="#">Eng</nuxt-link> | <nuxt-link to="#">繁</nuxt-link> | <nuxt-link to="#">简</nuxt-link>
            </div>
          </div>
          <div class="top_right_size">
            <button class="but_16">A</button>
            <button class="but_24">A</button>
            <button class="but_30">A</button>
          </div>
          <div class="clear"></div>
          <div class="top_right_but">
            <nuxt-link to="#"><i class="fa fa-search"></i></nuxt-link>
            <nuxt-link to="/"><i class="fa fa-home"></i></nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.wrapper {
  width: 100%;
}
</style>
