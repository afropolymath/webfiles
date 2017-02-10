<template>
  <div class="base-component c-file-list-view">
    <activity-indicator v-if="!wfFiles"></activity-indicator>
    <div class="c-file-scroller">
      <div class="c-file-list">
        <File v-for="file in wfFiles" :wf-file-object="file"></File>
      </div>
    </div>
    <div class="c-file-properties">
      <div class="wedge" v-if="!selectedFile">
      Nothing here
      </div>
      <div class="wedge" v-if="selectedFile">
        <p class="file-name">
          <a :href="selectedFile.uri">{{ selectedFile.name }}</a>
        </p>
        <div class="file-prop">
          <p class="header">File Size</p>
          <p class="detail">{{ selectedFile.size }}</p>
        </div>
        <div class="file-prop">
          <p class="header">Date Created</p>
          <p class="detail">{{ selectedFile.date_created }}</p>
        </div>
        <div class="file-prop">
          <p class="header">Date Modified</p>
          <p class="detail">{{ selectedFile.date_modified }}</p>
        </div>
        <div class="file-prop">
          <p class="header">Owner</p>
          <p class="detail">{{ selectedFile.size }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

import File from './File';
import ActivityIndicator from './ActivityIndicator';

export default {
  props: ['wfFiles'],
  components: {
    File,
    ActivityIndicator,
  },
  computed: {
    ...mapGetters({
      selectedFile: 'files/getSelectedFile',
    }),
  },
};
</script>

<style lang="sass?outputStyle=expanded">
.c-file-list-view {
  position: relative;
  display: flex;
  flex-grow: 1;
}

.c-file-scroller {
  flex-grow: 1;
  overflow-y: scroll;

  .c-file-list {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    padding: 30px;
  }
}

.c-file-properties {
  display: flex;
  background: #F9F9F9;
  border-left: solid 1px #EEE;

  .wedge {
    width: 300px;
    padding: 30px;
    flex-grow: 1;
    overflow-y: scroll;
  }

  .file-name {
    white-space: wrap;
    word-wrap: break-word;
    font-size: 1.3em;
    margin: 0;
  }

  .file-prop {
    margin-top: 20px;

    .header{
      font-weight: bold;
      margin: 0;
    }

    .detail {
      font-weight: 100;
      margin: 0;
    }
  }
}
</style>