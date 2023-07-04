<template>
  <div>
    <bread-component />
    <v-container class="content-container">
      <v-row>
        <v-col class="main-content" md="9">
          <div class="font font--2 font--dark font-weight-bold mb-2 main-title">
            運営者情報
          </div>
          <div class="font font--6 font--gray font-weight-bold py-3 info-div">
            <p>
              運営者情報本文運営者情報本文運営者情報本文運営者情報本文運営者情報本文運営者情報本文
            </p>
            <p>運営者情報本文運営者情報本文運営者情報本文</p>
            <p>
              運営者情報本文運営者情報本文運営者情報本文運営者情報本文運営者情報本文
            </p>
            <p>
              運営者情報本文運営者情報本文運営者情報本文運営者情報本文運営者情報本文運営者情報本文運営者情報本文
            </p>
            <p>運営者情報本文運営者情報本文運営者情報本文</p>
          </div>
          <div class="font font--6 font--gray font-weight-bold py-3 info-div">
            <p>
              運営者情報本文運営者情報本文運営者情報本文運営者情報本文運営者情報本文運営者情報本文
              運営者情報本文運営者情報本文運営者情報本文
              運営者情報本文運営者情報本文運営者情報本文運営者情報本文運営者情報本文
              運営者情報本文運営者情報本文運営者情報本文運営者情報本文
            </p>
            <p>
              運営者情報本文運営者情報本文運営者情報本文運営者情報本文運営者情報本文
            </p>
          </div>
          <div class="font font--6 font--gray font-weight-bold py-3 info-div">
            <p>
              運営者情報本文運営者情報本文運営者情報本文運営者情報本文運営者情報本文運営者情報本文
              運営者情報本文運営者情報本文運営者情報本文
              運営者情報本文運営者情報本文運営者情報本文運営者情報本文運営者情報本文
              運営者情報本文運営者情報本文運営者情報本文運営者情報本文運営者情報本文運営者情報本文運営者情報本文
            </p>
          </div>
          <div class="font font--6 font--gray font-weight-bold py-3 info-div">
            <p>
              運営者情報本文運営者情報本文運営者情報本文運営者情報本文運営者情報本文運営者情報本文
              運営者情報本文運営者情報本文運営者情報本文
              運営者情報本文運営者情報本文運営者情報本文運営者情報本文運営者情報本文
              運営者情報本文運営者情報本文運営者情報本文
            </p>
          </div>
        </v-col>
        <v-col class="sidebar" md="3"> </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import BreadComponent from '~/components/BreadComponent.vue'

export default {
  name: 'ManagerInfo',
  components: { BreadComponent },
  created() {
    this.setBreadData('運営者情報', '/managerinfo')
  },
  methods: {
    setBreadData(subtitle, subhref) {
      this.$store.commit('SET_BREAD_DATA', subtitle, subhref)
    },
  },
}
</script>
