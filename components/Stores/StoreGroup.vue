<template>
  <div class="mt-10 store-group">
    <v-row>
      <div class="font font--2 font--dark font-weight-bold mb-2">
        <v-icon class="font font--2 font--dark">mdi-store</v-icon>
        新着のお店
      </div>
    </v-row>
    <div class="store-body">
      <v-img
        height="200"
        width="100%"
        src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
        class="my-4"
      />
      <v-row>
        <v-col v-for="i in 6" :key="i" cols="12" md="4" sm="6" xs="12">
          <store-single />
        </v-col>
      </v-row>
      <v-btn
        class="font font--5 font--dark back goto-btn mt-6"
        height="50"
        width="225"
        >お店一覧を見る
        <v-icon>mdi-chevron-right</v-icon>
      </v-btn>
    </div>
  </div>
</template>

<script>
import StoreSingle from './StoreSingle.vue'
export default {
  name: 'StoreGroup',
  components: { StoreSingle },
}
</script>

<style></style>
