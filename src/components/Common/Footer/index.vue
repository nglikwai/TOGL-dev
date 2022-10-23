<template>
  <footer class="footer-wrapper">
    <div class="foot">
      <div class="container">
        <div class="foot_left">
          <img src="@/assets/images/foot_logo.png" />
          <span>
            <a href="#">Important</a><b>|</b
            ><a href="#">Privacy Policy Statement</a><br />
            Lands Department © The Government of the HKSAR. <br />
            All Rights Reserved.
          </span>
        </div>
        <div class="foot_right">
          <img src="@/assets/images/w3c_icon.jpg" />
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.container {
  width: 100vw;
}
.footer-wrapper {
  background: #ecf6fb;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
