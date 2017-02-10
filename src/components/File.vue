<template>
  <div class="base-component c-file" @click="selectFile" @dblclick="triggerFile"
    :class="{ 'active': selectedFile && selectedFile.id == wfFileObject.id }">
    <div class="file-icon">
      <span class="file-icon material-icons">{{ fileIcon }}</span>
    </div>
    <div class="file-name">
      {{ wfFileObject.name }}
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  props: {
    wfFileObject: Object,
  },
  methods: {
    selectFile() {
      this.$store.dispatch('files/selectObject', { file: this.wfFileObject });
    },
    triggerFile() {
      if (this.wfFileObject.is_folder) {
        this.$router.push({ name: 'folder', params: { folderId: this.wfFileObject.id } });
      }
    },
  },
  computed: {
    fileIcon() {
      if (this.wfFileObject.is_folder) {
        return 'folder';
      }
      return 'insert_drive_file';
    },
    ...mapGetters({
      currentUser: 'users/getCurrentUser',
      selectedFile: 'files/getSelectedFile',
    }),
  },
};
</script>

<style lang="sass?outputStyle=expanded">
.no-select {
  -webkit-touch-callout: none;
    -webkit-user-select: none;
     -khtml-user-select: none;
       -moz-user-select: none;
        -ms-user-select: none;
            user-select: none;
}

.c-file {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  height: 128px;
  width: 128px;
  border: solid 1px transparent;
  border-radius: 2px;
  transition: border .3s;
  margin-bottom: 25px;
  .file-icon {
    @extend .no-select;
    font-size: 48px;
  }
  .file-name {
    @extend .no-select;
    font-size: 0.85em;
    font-weight: 100;
    text-align: center;
    width: 128px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  &:hover {
    border-color: #ccc;
    cursor: pointer;
    box-shadow: 1px 1px 6 px 0 rgba(0,0,0,0.08);
  }
  &.active {
    border-color: #617C9C;
  }
}
</style>