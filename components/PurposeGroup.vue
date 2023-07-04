<template>
  <div class="mt-10 purpose-group">
    <v-row>
      <div class="font font--2 font--dark font-weight-bold mb-2">
        <v-icon class="font font--2 font--dark">mdi-file-search</v-icon>
        目的からお店を探す
      </div>
    </v-row>
    <div class="purpose-body">
      <v-row>
        <v-col v-for="i in 6" :key="i" cols="12" md="4" sm="6" xs="12">
          <v-btn class="purpose-btn" block>〜がしたい{{ i }}</v-btn>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PurposeGroup',
}
</script>

<style></style>
