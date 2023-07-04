<template>
  <div class="mt-8">
    <div class="font font--5 font--dark font-weight-bold my-3">
      <v-icon class="font--dark" large>mdi-file-search</v-icon>
      目的からお店を探す
    </div>
    <v-row class="my-3">
      <v-btn
        v-for="i in 6"
        :key="i"
        outlined
        block
        height="60"
        class="font font--6 font--gray font-weight-bold right-purpose-btn"
        >〜がしたい{{ i }}</v-btn
      >
    </v-row>
  </div>
</template>

<script>
export default {
  name: 'RightPurposeGroup',
}
</script>

<style></style>
