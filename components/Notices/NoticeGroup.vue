<template>
  <div class="mt-6">
    <v-row>
      <v-card outlined>
        <v-card-text>
          <div class="font font--5 font--dark font-weight-bold">
            <v-icon>mdi-newspaper</v-icon>
            お知らせ
          </div>
          <notice-single v-for="i in 2" :key="i" />
          <div
            class="d-flex justify-end font font--5 font--dark font-weight-bold"
          >
            お知らせ一覧
          </div>
        </v-card-text>
      </v-card>
    </v-row>
  </div>
</template>

<script>
import NoticeSingle from './NoticeSingle.vue'
export default {
  name: 'NoticeGroup',
  components: { NoticeSingle },
}
</script>

<style></style>
