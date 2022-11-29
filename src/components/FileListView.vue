<template>
  <div class="base-component c-file-list-view">
    <activity-indicator v-if="!wfFiles"></activity-indicator>
    <div class="c-file-scroller">
      <div class="c-file-list" @click="deselectFile">
        <File
          v-for="file in wfFiles"
          :wf-file-object="file"
          :key="file.id"
        ></File>
      </div>
    </div>
    <div class="c-file-properties" :class="{ tucked: sideBarTucked }">
      <div class="hide-handle" @click="sideBarTucked = !sideBarTucked">
        {{ sideBarTucked ? "&#9664;" : "&#9658;" }}
      </div>
      <div class="wedge" v-if="!selectedFile">
        Nothing here
      </div>
      <div class="wedge file-preview" v-if="selectedFile">
        <!-- Nothing here yet -->
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
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

import File from "./File";
import ActivityIndicator from "./ActivityIndicator";

export default {
  props: ["wfFiles"],
  data() {
    return {
      sideBarTucked: true
    };
  },
  components: {
    File,
    ActivityIndicator
  },
  methods: {
    deselectFile() {
      this.$store.dispatch("files/deselectObject");
    }
  },
  computed: {
    ...mapGetters({
      selectedFile: "files/getSelectedFile"
    })
  },
  watch: {
    selectedFile(file) {
      if (file) {
        this.sideBarTucked = false;
      }
    }
  }
};
</script>

<style lang="scss">
.c-file-list-view {
  position: relative;
  display: flex;
  flex-grow: 1;
  overflow: hidden;
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
  position: relative;
  display: flex;
  flex-direction: column;
  background: #f9f9f9;
  border-left: solid 1px #eee;
  transition: all 0.3s;

  .hide-handle {
    position: absolute;
    bottom: 0;
    left: -32px;
    background: #f9f9f9;
    height: 30px;
    width: 30px;
    line-height: 30px;
    text-align: center;
    border: solid 1px #eee;
    border-right-color: #f9f9f9;
    border-bottom: none;
    border-radius: 5px 0 0 0;
    cursor: pointer;
    font-size: 10px;
  }

  &.tucked {
    margin-right: -301px;
    transition: all 0.3s;

    .hide-handle {
      border-radius: 5px 0 5px 0;
    }
  }

  .wedge {
    width: 240px;
    padding: 30px;
    flex-grow: 1;
    overflow-y: scroll;

    &.file-preview {
      width: 300px;
      height: 300px;
      background: #fff;
      overflow-y: none;
      padding: 0;
      border-bottom: solid 1px #eee;
    }
  }

  .file-name {
    white-space: wrap;
    word-wrap: break-word;
    font-size: 1.3em;
    margin: 0;
  }

  .file-prop {
    margin-top: 20px;

    .header {
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
