<template>
  <div class="my-10 review-group">
    <v-row>
      <div class="font font--2 font--dark font-weight-bold mb-2">
        <v-icon class="font font--2 font--dark"
          >mdi-chat-processing-outline</v-icon
        >
        新着の口コミ
      </div>
    </v-row>
    <div class="review-body">
      <v-row>
        <v-col v-for="i in 4" :key="i" cols="12" sm="6" xs="12">
          <review-single />
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
import ReviewSingle from './ReviewSingle.vue'
export default {
  name: 'ReviewGroup',
  components: { ReviewSingle },
}
</script>

<style></style>
