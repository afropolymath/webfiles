<template>
  <div class="base-component file-manager-toolbar">
    <div class="btn-toolbar btn-dark"><i class="material-icons">keyboard_arrow_left</i></div>
    <div class="btn-group stretch-control">
      <div class="btn-toolbar btn-transparent"><i class="material-icons">file_upload</i> Upload File</div>
      <div class="btn-toolbar btn-transparent"><i class="material-icons">create_new_folder</i> Create Folder</div>
      <div class="btn-toolbar btn-transparent"><i class="material-icons">note_add</i>Create Empty File</div>
      <div class="btn-toolbar btn-transparent"><i class="material-icons">edit</i> Edit Object</div>
      <div class="btn-toolbar btn-transparent"><i class="material-icons">delete</i> Delete Object</div>
    </div>
    <div class="btn-toolbar btn-dark"><i class="material-icons">keyboard_arrow_right</i></div>
  </div>
</template>

<script>
export default {

};
</script>

<style lang="sass?outputStyle=expanded">
.file-manager-toolbar {
  display: flex;
  align-items: center;
  height: 50px;
  background: #FBC807
}

.btn-toolbar {
  height: 50px;
  display: flex;
  align-items: center;
  padding: 0 20px;
  font-size: 13px;
  cursor: pointer;
  transition: all .3s;
  &:hover {
    background: #E7B809;
  }
  i {
    margin-right: 8px;
  }
}

.btn-dark {
  background: #DCAF05;
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
</style>