<template>
  <div class="base-page">
    <file-manager>
      <file-manager-header/>
      <file-manager-toolbar/>
      <file-list-view :wf-files="where.objects"/>
    </FileManager>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

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
      this.$store.dispatch('files/loadFiles', { user });
    })
    .catch(() => {
      this.$router.push({ name: 'login' });
    });
  },
  computed: {
    ...mapGetters({
      user: 'users/getCurrentUser',
      where: 'files/getCurrentFolder',
    }),
  },
};
</script>