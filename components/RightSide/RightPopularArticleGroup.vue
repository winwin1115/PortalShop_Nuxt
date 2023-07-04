<template>
  <div class="mt-8">
    <div class="font font--5 font--dark font-weight-bold my-3">
      <v-icon class="font--dark" large>mdi-crown</v-icon>
      人気の記事
    </div>
    <div>
      <div v-for="i in 8" :key="i" class="d-flex justify-content-start my-3">
        <v-img
          height="80"
          width="80"
          src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
        />
        <div class="font font--6 font--gray pl-3">
          人気の情報タイ トル人気の情報タイトル人気の情報タイトル
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RightPopularArticleGroup',
}
</script>

<style></style>
