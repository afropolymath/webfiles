<template>
  <div class="base-component c-file-manager-header">
    <div class="flx-container">
      <div class="logo">
        <img src="../assets/img/logo.png" />
      </div>
      <div class="title">
        ~ - Home Directory - WebFiles 1.0
      </div>
      <div class="controls">
        <a id="logout-control">
          <i class="material-icons">power_settings_new</i>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {

};
</script>

<style lang="sass?outputStyle=expanded">
.flx-container {
  display: flex;
  height: 50px;
  flex-direction: row;
  align-items: stretch;
}

.flex-text {
  display: flex;
  align-items: center;
  justify-content: center;
}

.c-file-manager-header {
  padding: 10px;
  .logo {
    @extend .flex-text;
    width: 50px;
  }
  .title {
    @extend .flex-text;
    font-family: "Din Pro";
    flex-grow: 1;
    font-weight: 500;
  }
  .controls {
    @extend .flex-text;
    width: 50px;
  }
}
</style>