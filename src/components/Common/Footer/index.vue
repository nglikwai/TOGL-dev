<template>
  <div class="footer-wrapper">
    <div class="foot">
      <div class="container">
        <div class="foot_left">
          <img src="@/assets/images/foot_logo.png" class="land-logo" />
          <span>
            <a href="#">Important</a><b>|</b><a href="#">Privacy Policy Statement</a><br />
            Lands Department © The Government of the HKSAR. <br />
            All Rights Reserved.
          </span>
        </div>
        <div class="foot_right">
          <img src="@/assets/images/w3c_icon.jpg" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.footer-wrapper {
  background-color: #ecf6fb;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

@media (max-width: 400px) {
  .land-logo {
    margin: 0 0 20px 10px;
  }

  .foot_left{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
}
</style>
