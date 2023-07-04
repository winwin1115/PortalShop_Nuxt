<template>
  <div>
    <bread-component />
    <v-container class="content-container">
      <v-row>
        <v-col class="main-content" md="9">
          <div class="font font--2 font--dark font-weight-bold mb-2 main-title">
            マイページ
          </div>
          <div class="tab-div">
            <v-tabs class="my-6 my-tab">
              <v-tab
                class="font font--6 font-weight-bold tab-btn"
                href="#account-tab"
                >登録情報管理</v-tab
              >
              <v-tab-item class="mt-8" value="account-tab">
                <my-info />
              </v-tab-item>
              <v-tab
                class="font font--6 font-weight-bold tab-btn"
                href="#review-tab"
                >口コミ管理</v-tab
              >
              <v-tab-item class="mt-8" value="review-tab">
                <my-review />
              </v-tab-item>
              <v-tab
                class="font font--6 font-weight-bold tab-btn"
                href="#favourite-tab"
                >お気に入り管理</v-tab
              >
              <v-tab-item class="mt-8" value="favourite-tab">
                <p>3333333333333333</p>
              </v-tab-item>
              <v-tab
                class="font font--6 font-weight-bold tab-btn"
                href="#que-tab"
                >質問履歴管理</v-tab
              >
              <v-tab-item class="mt-8" value="que-tab">
                <p>4444444444444444</p>
              </v-tab-item>
            </v-tabs>
          </div>
        </v-col>
        <v-col class="sidebar" md="3"> </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import BreadComponent from '~/components/BreadComponent.vue'
import MyInfo from '~/components/MyPages/MyInfo.vue'
import MyReview from '~/components/MyPages/MyReview.vue'
export default {
  name: 'MyPageInfo',
  components: { BreadComponent, MyInfo, MyReview },
  created() {
    this.setBreadData('マイページ', '/my-page')
  },
  methods: {
    setBreadData(subtitle, subhref) {
      this.$store.commit('SET_BREAD_DATA', subtitle, subhref)
    },
  },
}
</script>
