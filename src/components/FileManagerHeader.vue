<template>
  <div class="base-component file-manager-header">
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
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters({
      user: 'users/getCurrentUser',
      where: 'files/getCurrentFolder',
    }),
  },
};
</script>

<style lang="sass?outputStyle=expanded">
.flex-text {
  display: flex;
  align-items: center;
  justify-content: center;
}

.file-manager-header {
  display: flex;
  flex-layout: row;
  align-items: stretch;
  height: 50px;
  padding: 10px;
  .logo {
    @extend .flex-text;
    width: 50px;
  }
  .title {
    @extend .flex-text;
    flex-grow: 1;
    font-weight: 500;
  }
  .controls {
    @extend .flex-text;
    width: 50px;
  }
}
</style>