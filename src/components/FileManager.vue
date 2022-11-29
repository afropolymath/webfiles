<template>
  <div class="base-component c-file-manager">
    <slot></slot>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.c-file-manager {
  position: absolute;
  display: flex;
  flex-direction: column;
  top: 40px;
  bottom: 40px;
  left: 40px;
  right: 40px;
  background: #fff;
  border-radius: 5px;
  border: 1px solid #e7e7e7;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.08);
}
</style>
