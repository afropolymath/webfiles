<template>
  <div class="base-component c-file-list-view">
    <activity-indicator v-if="!wfFiles"></activity-indicator>
    <File v-for="file in wfFiles" :wf-file-object="file"></File>
  </div>
</template>

<script>
import File from './File';
import ActivityIndicator from './ActivityIndicator';

export default {
  props: ['wfFiles'],
  components: {
    File,
    ActivityIndicator,
  },
};
</script>

<style lang="sass?outputStyle=expanded">
.c-file-list-view {
  position: relative;
  flex-grow: 1;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  overflow-y: scroll;
  padding: 30px;
}
</style>