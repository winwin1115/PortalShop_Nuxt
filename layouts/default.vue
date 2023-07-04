<template>
  <v-app>
    <v-main>
      <v-container class="app-container">
        <top-header />
        <Nuxt />
        <main-footer />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import MainFooter from '~/components/MainFooter.vue'
import TopHeader from '~/components/TopHeader.vue'
export default {
  name: 'DefaultLayout',
  components: { TopHeader, MainFooter },
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/',
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire',
        },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js',
    }
  },
}
</script>

<style lang="scss" src="../assets/common.scss"></style>
