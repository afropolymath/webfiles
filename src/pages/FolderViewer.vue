<template>
  <file-manager>
    <file-manager-header />
    <file-manager-toolbar />
    <file-list-view :wf-files="where.objects" />
  </file-manager>
</template>

<script>
import { mapGetters } from "vuex";

import FileManager from "../components/FileManager";
import FileManagerHeader from "../components/FileManagerHeader";
import FileManagerToolbar from "../components/FileManagerToolbar";
import FileListView from "../components/FileListView";

export default {
  props: ["folderId"],
  components: {
    FileManager,
    FileManagerHeader,
    FileManagerToolbar,
    FileListView,
  },
  beforeRouteUpdate(to, from, next) {
    this.navigateToDirectory(this.user, to.params.folderId)
      .then(() => {
        next();
      })
      .catch(() => {
        console.log("An error occurred");
      });
  },
  created() {
    // Use params to determine the current folder
    this.$store
      .dispatch("users/loadUser")
      .then((user) => {
        console.log(user);
        this.navigateToDirectory(user, this.$route.params.folderId).catch(
          () => {
            console.log("An error occurred");
          }
        );
      })
      .catch(() => {
        this.$router.push({ name: "login" });
      });
  },
  methods: {
    doSomething() {
      console.log("Doing something up here");
    },
    navigateToDirectory(user, folderId) {
      this.where.objects = undefined;
      if (folderId === "~") {
        return this.$store.dispatch("files/loadFiles", { user });
      }
      return this.$store.dispatch("files/navigateToDirectory", {
        user,
        directory: { id: folderId },
      });
    },
  },
  computed: {
    ...mapGetters({
      user: "users/getCurrentUser",
      where: "files/getCurrentFolder",
    }),
  },
};
</script>
