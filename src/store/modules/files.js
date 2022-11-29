import File from "../../services/file";

export default {
  namespaced: true,
  state: {
    currentFolder: { name: "", path: "", objects: "" },
    selectedFile: null,
  },
  actions: {
    loadFiles({ commit }, { user }) {
      return File.list(user).then((response) => {
        commit("SET_CURRENT_FOLDER", response);
      });
    },
    navigateToDirectory({ commit }, { user, directory }) {
      return File.view(user, directory).then((response) => {
        commit("SET_CURRENT_FOLDER", response);
      });
    },
    uploadFile({ commit }, { user, file, directory }) {
      const formData = new FormData();
      formData.append("file", file);
      if (directory && directory.id) {
        formData.append("parent_id", directory.id);
      }
      return File.create(user, formData).then((response) => {
        console.log(response);
        commit("ADD_FILE", response);
      });
    },
    createFolder({ commit }, { user, name, directory }) {
      const request = {
        name,
      };
      if (directory) {
        request.parent_id = directory.id;
      }
      return File.create(user, request).then((response) => {
        commit("ADD_FILE", response);
      });
    },
    editObject({ commit }, { user, file }) {
      return File.edit(user, file, { name: file.name }).then((response) => {
        commit("EDIT_FILE", response);
      });
    },
    moveObject({ commit }, { user, file, directory }) {
      return File.edit(user, file, { parent_id: directory.id }).then(() => {
        commit("DELETE_FILE", file);
      });
    },
    deleteObject({ commit }, { user, file, hardDelete }) {
      return File.delete(user, file, hardDelete).then(() => {
        commit("DELETE_FILE", file);
      });
    },
    deselectObject({ commit }) {
      commit("DESELECT_SELECTED_FILE");
    },
    selectObject({ commit }, { file }) {
      commit("SET_SELECTED_FILE", file);
    },
  },
  getters: {
    getSelectedFile(state) {
      return state.selectedFile;
    },
    getCurrentFolder(state) {
      return state.currentFolder;
    },
  },
  mutations: {
    /* eslint no-param-reassign: ["error", { "props": false }] */
    ADD_FILE(state, file) {
      state.currentFolder.objects.push(file);
    },
    SET_CURRENT_FOLDER(state, folder) {
      if (folder instanceof Array) {
        state.currentFolder.name = "Home";
        state.currentFolder.path = "~";
        state.currentFolder.objects = folder;
      } else {
        state.currentFolder = folder;
      }
    },
    EDIT_FILE(state, file) {
      const selectedFileIndex = state.currentFolder.objects.findIndex(
        (f) => f.id === file.id
      );
      state.currentFolder.objects[selectedFileIndex] = file;
    },
    DELETE_FILE(state, file) {
      const selectedFileIndex = state.currentFolder.objects.findIndex(
        (f) => f.id === file.id
      );
      state.currentFolder.objects.splice(selectedFileIndex, 1);
    },
    SET_SELECTED_FILE(state, file) {
      state.selectedFile = file;
    },
    DESELECT_SELECTED_FILE(state) {
      state.selectedFile = null;
    },
  },
};
