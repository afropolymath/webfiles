<template>
  <div class="base-component file-list-view">
    <File v-for="file in where.objects" :file-object="file"></File>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

import File from './File';

export default {
  components: {
    File,
  },
  computed: {
    ...mapGetters({
      where: 'files/getCurrentFolder',
    }),
  },
};
</script>