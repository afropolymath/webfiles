<template>
  <div class="base-component c-file-manager-toolbar">
    <div class="flx-container">
      <div class="btn-toolbar btn-dark">
        <button class="toolbar-menu-button">
          <i class="material-icons">keyboard_arrow_left</i>
        </button>
      </div>
      <div class="btn-group stretch-control">
        <div class="btn-toolbar btn-transparent">
          <button
            class="toolbar-menu-button"
            @click="toggleMenuItem('file_upload')"
          >
            <i class="material-icons">file_upload</i> Upload File
          </button>
          <div
            class="dropdown-form upload-form"
            v-if="isVisible('file_upload')"
          >
            <form @submit.prevent="uploadFile">
              <label for="file">Select the file you would like to upload</label>
              <input type="file" name="file" @change="persistFiles($event)" />
              <button class="btn-action" type="submit">Upload File</button>
            </form>
          </div>
        </div>
        <div class="btn-toolbar btn-transparent">
          <button
            class="toolbar-menu-button"
            @click="toggleMenuItem('create_folder')"
          >
            <i class="material-icons">create_new_folder</i> Create Folder
          </button>
          <div
            class="dropdown-form folder-create-form"
            v-if="isVisible('create_folder')"
          >
            <label for="name"
              >Enter the name of the folder you wish to create</label
            >
            <input type="text" name="name" placeholder="Enter folder name" />
            <button class="btn-action">Create Folder</button>
          </div>
        </div>
        <div class="btn-toolbar btn-transparent">
          <button class="toolbar-menu-button">
            <i class="material-icons">note_add</i>Create Empty File
          </button>
        </div>
        <div class="btn-toolbar btn-transparent" v-if="selectedFile">
          <button class="toolbar-menu-button">
            <i class="material-icons">edit</i> Edit Object
          </button>
        </div>
        <div class="btn-toolbar btn-transparent" v-if="selectedFile">
          <button class="toolbar-menu-button">
            <i class="material-icons">delete</i> Delete Object
          </button>
        </div>
      </div>
      <div class="btn-toolbar btn-dark">
        <button class="toolbar-menu-button">
          <i class="material-icons">keyboard_arrow_right</i>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      uploadFileObject: {},
      menuSections: {
        file_upload: false,
        create_folder: false
      }
    };
  },
  methods: {
    toggleMenuItem(item) {
      Object.keys(this.menuSections).forEach(section => {
        this.menuSections[section] =
          section === item ? !this.menuSections[section] : false;
      });
    },
    isVisible(item) {
      return this.menuSections[item];
    },
    persistFiles($event) {
      this.uploadFileObject = $event.target.files[0];
    },
    uploadFile() {
      this.$store
        .dispatch("files/uploadFile", {
          user: this.currentUser,
          file: this.uploadFileObject,
          directory: this.where
        })
        .then(() => {
          this.toggleMenuItem("file_upload");
        });
    }
  },
  computed: {
    ...mapGetters({
      currentUser: "users/getCurrentUser",
      where: "files/getCurrentFolder",
      selectedFile: "files/getSelectedFile"
    })
  }
};
</script>

<style lang="scss">
.flx-container {
  display: flex;
  height: 50px;
  flex-direction: row;
  align-items: center;
}

.c-file-manager-toolbar {
  background: #fbc807;
}

.btn-toolbar {
  position: relative;
  display: flex;
  .toolbar-menu-button {
    display: flex;
    align-items: center;
    height: 50px;
    background: transparent;
    border: none;
    padding: 0 20px;
    font-family: "Open Sans", Arial, sans-serif;
    font-size: 13px;
    cursor: pointer;
    transition: all 0.3s;
    &:hover {
      background: #e7b809;
    }
    &:focus,
    &:active {
      outline: none;
    }
  }
  i {
    margin-right: 8px;
  }
}

.btn-dark {
  background: #dcaf05;
  i {
    margin-right: 0;
  }
}

.btn-group {
  display: flex;
}

.stretch-control {
  flex-grow: 1;
}

.dropdown-form {
  min-width: 230px;
  position: absolute;
  display: flex;
  flex-direction: column;
  background: #fbc807;
  left: 0;
  top: 50px;
  padding: 20px;
  z-index: 10;
  label {
    display: block;
    margin-bottom: 10px;
    font-size: 14px;
  }
  input[type="text"] {
    padding: 10px;
    border: solid 2px #232323;
    border-radius: 2px;
  }
  .btn-action {
    background: #617c9c;
    width: 100%;
    color: #fff;
    border: none;
    padding: 10px;
    margin-top: 10px;
    font-family: "Open Sans", Arial, sans-serif;
    &:active {
      outline: none;
    }
  }
}
</style>
