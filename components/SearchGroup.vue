<template>
  <div class="mt-6 search-group">
    <v-row>
      <div class="font font--2 font--dark font-weight-bold mb-2">
        <v-icon class="font font--2 font--dark">mdi-magnify</v-icon>
        お店を探す
      </div>
    </v-row>
    <v-row class="search-body d-flex justify-space-between pt-2">
      <div class="text-center search-div">
        <v-icon x-large> mdi-map </v-icon>
        <div class="font font--5 font--white font-weight-bold my-1">エリア</div>
        <div class="font font--6 font--white font-weight-bold">から探す</div>
      </div>
      <div class="text-center search-div">
        <v-icon x-large> mdi-train </v-icon>
        <div class="font font--5 font--white font-weight-bold my-1">駅</div>
        <div class="font font--6 font--white font-weight-bold">から探す</div>
      </div>
      <div class="text-center search-div">
        <v-icon x-large> mdi-map-marker-radius-outline </v-icon>
        <div class="font font--5 font--white font-weight-bold my-1">現在地</div>
        <div class="font font--6 font--white font-weight-bold">から探す</div>
      </div>
    </v-row>
    <v-row class="search-body pt-4">
      <v-text-field
        class="find-shop-input"
        label="Please input here"
        append-icon="mdi-magnify"
        solo
      ></v-text-field>
    </v-row>
  </div>
</template>

<script>
export default {
  name: 'SearchGroup',
}
</script>
