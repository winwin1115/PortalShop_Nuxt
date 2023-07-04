<template>
  <v-container class="my-10">
    <v-row justify="center" align="start">
      <v-col cols="12" sm="12" md="9">
        <p class="font font--1 font--dark font-weight-bold">brife-title</p>
        <div class="mt-10 article-group">
          <div class="pagination-header font font--gray font-weight-bold">
            <div class="d-flex justify-space-between">
              <p class="font--4">
                <span class="font--3">256件</span>見つかりました
              </p>
              <p class="font-4">
                <span class="font--3">1~10</span>
                件表示/
                <span class="font--3">全26ページ</span>
              </p>
            </div>
            <v-divider />
            <div class="d-flex justify-space-between">
              <div class="d-flex justify-content-start">
                <span class="sort-btn caret">おすすめ順</span>
                <span class="separate">|</span>
                <span class="sort-btn caret"> 口コミ数順 </span>
                <span class="separate">|</span>
                <span class="sort-btn caret"> さらに絞り込む</span>
                <span class="separate">|</span>
                <span class="sort-btn caret"> エリアを変更</span>
              </div>
              <div class="d-flex justify-content-end">
                <span class="perpage-label">表示数変更</span>
                <v-combobox
                  v-model="selected"
                  :items="items"
                  class="perpage"
                ></v-combobox>
              </div>
            </div>
          </div>
          <v-row v-for="i in 10" :key="i"> </v-row>
          <v-pagination
            v-model="currentPage"
            class="my-4 customPageFooter"
            :length="totalPage"
            :total-visible="5"
          />
        </div>
      </v-col>
      <v-col cols="12" sm="12" md="3">
        <right-purpose-group />
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
              height="250"
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
import CONSTANTS from '../../constants/constants'
import RightCategoryGroup from '~/components/RightSide/RightCategoryGroup.vue'
import RightPopularArticleGroup from '~/components/RightSide/RightPopularArticleGroup.vue'
import RightPurposeGroup from '~/components/RightSide/RightPurposeGroup.vue'

export default {
  name: 'SearchByCategory',
  components: {
    RightCategoryGroup,
    RightPurposeGroup,
    RightPopularArticleGroup,
  },
  data: () => ({
    items: CONSTANTS.PERPAGE.ITEMS.map((i) => i.title),
    selected: '10ページ',
    currentPage: 1,
    totalPage: 15,
  }),
}
</script>

<style></style>
