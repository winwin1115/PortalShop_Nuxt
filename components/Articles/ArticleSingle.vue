<template>
  <v-card outlined>
    <v-img
      height="150"
      src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
    ></v-img>
    <v-card-text>
      <div class="font font--5 font--dark font-weight-bold">記事タイトル</div>
      <v-divider class="my-2"></v-divider>
      <div class="d-flex justify-space-between text-caption mb-2">
        <div class="font font--6 font--gray py-1">2022/01/18</div>
        <div
          class="font font--6 font--gray text-no-wrap px-2 py-1 background--warn"
        >
          ブログ用タグ
        </div>
      </div>
      <div class="font font--6 font--gray">
        記事本文抜粋記事本文抜粋 記事本文抜粋記事本文抜粋
        記事本文抜粋記事本文抜粋 記事本文抜粋記事本文抜粋
        記事本文抜粋記事本文抜粋...
      </div>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: 'ArticleSingle',
}
</script>

<style></style>
