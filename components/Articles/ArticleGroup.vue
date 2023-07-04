<template>
  <div class="mt-10 article-group">
    <v-row>
      <div class="font font--2 font--dark font-weight-bold mb-2">
        <v-icon class="font font--2 font--dark">mdi-file-document-edit</v-icon>
        新着記事
      </div>
    </v-row>
    <div class="article-body">
      <v-row>
        <v-col v-for="i in 6" :key="i" cols="12" md="4" sm="6" xs="12">
          <article-single />
        </v-col>
      </v-row>
      <v-btn
        class="font font--5 font--dark back goto-btn mt-6"
        height="50"
        width="225"
        >記事一覧を見る
        <v-icon>mdi-chevron-right</v-icon>
      </v-btn>
    </div>
  </div>
</template>

<script>
import ArticleSingle from './ArticleSingle.vue'
export default {
  name: 'ArticleGroup',
  components: { ArticleSingle },
}
</script>

<style></style>
