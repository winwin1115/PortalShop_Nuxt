<template>
  <div>
    <v-row class="mb-5 item-child-group">
      <v-col cols="12" xs="12" sm="6" md="3" lg="3" ml="3">
        <v-img
          height="250"
          src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
          alt="AD"
          class="ml-6"
        />
      </v-col>
      <v-col cols="12" xs="12" sm="6" md="3" lg="3" ml="3" class="px-12">
        <div class="font font--5 font--dark font-weight-bold mb-2">
          目的からお店を探す
        </div>
        <div v-for="i in 6" :key="i" class="font font--6 font--gray">
          〜がしたい{{ i }}
        </div>
      </v-col>
      <v-col cols="12" xs="12" sm="6" md="3" lg="3" ml="3" class="px-12">
        <div class="font font--5 font--dark font-weight-bold mb-2">
          カテゴリから探す
        </div>
        <div v-for="i in 6" :key="i" class="font font--6 font--gray">
          カテゴリ{{ i }}
        </div>
      </v-col>
      <v-col
        class="font font--6 font--gray font-weight-bold"
        cols="12"
        xs="12"
        sm="6"
        md="3"
        lg="3"
        ml="3"
      >
        <div>会員登録</div>
        <div>お店掲載希望の方</div>
        <div>ログイン</div>
        <div>お気に入り</div>
        <div>閲覧履歴</div>
        <div>運営者情報</div>
        <div>プライバシーポリシー</div>
        <div>利用規約</div>
        <div>お問い合わせ</div>
        <div>サイトマップ</div>
      </v-col>
    </v-row>
    <div class="text-center mb-1">
      <div class="font font--5 font--dark font-weight-bold text-uppercase">
        Site name
      </div>
      <div class="font font--7 font--gray font-weight-bold">
        Copyright {{ new Date().getFullYear() }} © SITE NAME All Rights
        Reserved.
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MainFooter',
}
</script>

<style></style>
