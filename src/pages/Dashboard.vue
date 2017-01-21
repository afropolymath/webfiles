<template>
  <div class="base-page">
    <FileManager>
      <FileManagerHeader/>
      <FileManagerToolbar/>
      <FileListView/>
    </FileManager>
  </div>
</template>

<script>
import FileManager from '../components/FileManager';
import FileManagerHeader from '../components/FileManagerHeader';
import FileManagerToolbar from '../components/FileManagerToolbar';
import FileListView from '../components/FileListView';

export default {
  components: {
    FileManager,
    FileManagerHeader,
    FileManagerToolbar,
    FileListView,
  },
  created() {
    this.$store.dispatch('users/loadUser')
    .then((user) => {
      this.$store.dispatch('files/loadFiles', user);
    })
    .catch(() => {
      this.$router.push({ name: 'login' });
    });
  },
};
</script>