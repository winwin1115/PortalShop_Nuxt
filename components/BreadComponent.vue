<template>
  <v-breadcrumbs :items="getBreadData">
    <template #divider>
      <v-icon>mdi-chevron-right</v-icon>
    </template>
  </v-breadcrumbs>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'BreadComponent',
  computed: {
    ...mapGetters(['getBreadData'])
  }
}
</script>

<style lang="scss">
  .v-breadcrumbs {
    padding: 10px 12px !important;
    li {
      font-size: 14px;
      font-weight: bold;
      .v-icon {
        font-size: 22px;
      }
      &:nth-child(even)
      {
        padding: 0 0px;
        font-size: 20px;
      }
    }
  }
</style>
