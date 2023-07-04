<template>
  <v-card outlined>
    <v-card-text>
      <div class="d-flex justify-space-between">
        <div class="font font--5 font--dark font-weight-bold">お店の名前</div>
        <div class="d-flex align-center">
          <v-rating
            v-model="rating"
            background-color="orange lighten-3"
            color="orange"
            length="5"
            small
          ></v-rating>
          <div class="font font--5 font--dark font-weight-bold">4.0</div>
        </div>
      </div>
      <v-divider class="my-2"></v-divider>
      <div class="d-flex justify-space-between mb-3 text-caption">
        <div class="font font--7 font--gray">口コミ投稿者名 20代・男性</div>
        <div class="font font--7 font--gray">投稿日 2022/01/16</div>
      </div>
      <div class="mb-3 font font--6 font--dark font-weight-bold">
        口コミタイトル口コミタイトル口コミタイトル
      </div>
      <div class="font font--6 font--gray mb-3">
        口コミ本文口コミ本文口コミ本文口コミ本文口コミ本文
        口コミ本文口コミ本文口コミ本文口コミ本文口コミ本文
        口コミ本文口コミ本文口コミ本文口コミ本文口コミ本文
        口コミ本文口コミ本文口コミ本文口コミ本文口コミ本文
        口コミ本文口コミ本文口コミ本文...
      </div>
      <div class="d-flex justify-end align-center">
        <v-chip class="mr-4 font font--6 font--white background--primary">
          <v-icon small class="mr-2 font--white">mdi-thumb-up-outline</v-icon>
          参考になった！
        </v-chip>
        <div class="new-reviews-count font font-6">
          <div class="triangle-left"></div>
          <div class="triangle-left-two"></div>
          15
        </div>
      </div>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: 'ReviewSingle',
  data: () => ({
    rating: 4,
  }),
}
</script>

<style></style>
