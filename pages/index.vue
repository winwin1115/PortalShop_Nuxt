<template>
  <v-container class="my-10">
    <v-row justify="center" align="start">
      <v-col cols="12" sm="12" md="9">
        <search-group />
        <category-group />
        <article-group />
        <store-group />
        <review-group />
      </v-col>
      <v-col cols="12" sm="12" md="3">
        <div class="mt-6">
          <v-row>
            <v-btn
              class="font font--5 font--dark font-weight-bold"
              height="60"
              block
              outlined
              >掲載ご希望の方はコチラ</v-btn
            >
          </v-row>
        </div>
        <notice-group />
        <div>
          <v-row>
            <v-img
              height="250"
              width="100%"
              src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
              alt="AD"
              class="mt-6"
            />
          </v-row>
        </div>
        <right-category-group />
        <right-popular-article-group />
        <div>
          <v-row>
            <v-img
              height="700"
              width="100%"
              src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
              alt="AD"
              class="mt-6"
            />
          </v-row>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import ArticleGroup from '~/components/Articles/ArticleGroup.vue'
import CategoryGroup from '~/components/PurposeGroup.vue'
import NoticeGroup from '~/components/Notices/NoticeGroup.vue'
import ReviewGroup from '~/components/Reviews/ReviewGroup.vue'
import RightCategoryGroup from '~/components/RightSide/RightCategoryGroup.vue'
import RightPopularArticleGroup from '~/components/RightSide/RightPopularArticleGroup.vue'
import SearchGroup from '~/components/SearchGroup.vue'
import StoreGroup from '~/components/Stores/StoreGroup.vue'
export default {
  name: 'IndexPage',
  components: {
    SearchGroup,
    CategoryGroup,
    ArticleGroup,
    StoreGroup,
    ReviewGroup,
    NoticeGroup,
    RightCategoryGroup,
    RightPopularArticleGroup,
  },
  created() {
    this.setCategory(0)
  },
  methods: {
    setCategory(catId) {
      this.$store.commit('SET_CATEGORY', catId)
    },
  },
}
</script>
