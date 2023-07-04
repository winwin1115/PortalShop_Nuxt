<template>
  <div>
    <div class="d-flex justify-space-between align-center">
      <div class="text-h3 ml-5 mt-3 text-uppercase">Site name</div>
      <div class="desktop-header-menu d-none d-md-flex pr-2">
        <v-btn class="font font--dark my-5 mx-1 px-2 py-7 top-btn">
          <v-icon class="mr-2" color="white">mdi-heart</v-icon>お気に入り
        </v-btn>
        <v-btn class="font font--dark my-5 mx-2 px-7 py-7 top-btn">閲覧履歴</v-btn>
        <v-btn class="font font--dark my-5 mx-1 px-7 py-7 top-btn">会員登録</v-btn>
        <v-btn class="font font--dark my-5 mx-2 px-7 py-7 top-btn">ログイン</v-btn>
      </div>
      <div class="mobile-header-menu d-none d-sm-flex d-md-none">
        <v-menu bottom left>
          <template #activator="{ on, attrs }">
            <v-btn dark icon v-bind="attrs" color="primary" v-on="on">
              <v-icon>mdi-menu</v-icon>
            </v-btn>
          </template>

          <v-list>
            <v-list-item v-for="(item, i) in menuItems" :key="i">
              <v-list-item-title class="text-subtitle-2">{{
                item.title
              }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>
    </div>
    <div class="d-flex justify-space-between align-center mt-6">
      <v-row>
        <v-col cols="12" class="py-2">
          <v-tabs fixed-tabs class="">
            <v-tab class="top-tab">
              <v-icon>mdi-home</v-icon>
            </v-tab>
            <v-tab
              v-for="i in 6"
              :key="i"
              class="top-tab"
              @click="setCategory(i)"
            >
              カテゴリ{{ i }}
            </v-tab>
          </v-tabs>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'TopHeader',
  data: () => ({
    menuItems: [
      { title: 'お気に入り' },
      { title: '閲覧履歴' },
      { title: '会員登録' },
      { title: 'ログイン' },
    ],
  }),
  computed: {
    ...mapGetters(['getCategoryId']),
  },
  methods: {
    setCategory(catId) {
      this.$store.commit('SET_CATEGORY', catId)
    },
  },
}
</script>

<style></style>
