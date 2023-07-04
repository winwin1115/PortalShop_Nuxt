<template>
  <div class="mt-8">
    <div class="font font--5 font--dark font-weight-bold my-3">
      <v-icon class="font--dark" large>mdi-home-variant-outline</v-icon>
      カテゴリから探す
    </div>
    <v-row class="my-3">
      <v-btn
        v-for="i in 6"
        :key="i"
        outlined
        block
        height="60"
        class="font font--6 font--gray font-weight-bold right-category-btn"
        >カテゴリ{{ i }}</v-btn
      >
    </v-row>
  </div>
</template>

<script>
export default {
  name: 'RightCategoryGroup',
}
</script>

<style></style>
