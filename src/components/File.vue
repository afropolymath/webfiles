<template>
  <div class="base-component file">
    {{ fileObject.name }}
  </div>
</template>

<script>
export default {
  props: {
    fileObject: Object,
  },
};
</script>