<template>
  <div class="base-component c-file" @dblclick="triggerFile">
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
    triggerFile() {
      if (this.wfFileObject.is_folder) {
        this.$store.dispatch('files/navigateToDirectory', {
          user: this.currentUser,
          directory: this.wfFileObject,
        });
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
    }),
  },
};
</script>

<style lang="sass?outputStyle=expanded">
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
  margin-right: 25px;
  margin-bottom: 25px;
  .file-icon {
    font-size: 48px;
  }
  .file-name {
    font-size: 0.85em;
    font-weight: 100;
    text-align: center;
    width: 128px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  &:hover {
    border: solid 1px #ccc;
    cursor: pointer;
    box-shadow: 1px 1px 6 px 0 rgba(0,0,0,0.08);
  }
}
</style>