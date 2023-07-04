<template>
  <div>
    <bread-component />
    <v-container class="content-container">
      <v-row>
        <v-col class="main-content" md="9">
          <div class="font font--2 font--dark font-weight-bold mb-2 main-title">
            お問い合わせ
          </div>
          <div
            class="font font--6 font--dark font-weight-bold py-3 text-center"
          >
            お問い合わせは以下のフォームに入力して送信してください
          </div>
          <div class="font font-weight-bold pt-6 form-div">
            <v-simple-table>
              <tbody>
                <tr>
                  <td class="first-td">
                    <span>お問い合わせの種類</span>
                    <span class="require-span">必須</span>
                  </td>
                  <td>
                    <v-select
                      class="select-slot"
                      :items="['Foo', 'Bar']"
                      label="選択してください"
                    >
                    </v-select>
                  </td>
                </tr>
                <tr>
                  <td class="first-td">
                    <span>お名前</span>
                    <span class="require-span">必須</span>
                  </td>
                  <td>
                    <v-text-field></v-text-field>
                  </td>
                </tr>
                <tr>
                  <td rowspan="2" class="first-td">
                    <span>メールアドレス</span>
                    <span class="require-span">必須</span>
                  </td>
                  <td>
                    <v-text-field
                      placeholder="name@sitename.com"
                    ></v-text-field>
                  </td>
                </tr>
                <tr>
                  <td>
                    <v-text-field
                      placeholder="もう一度入力してください"
                    ></v-text-field>
                  </td>
                </tr>
                <tr>
                  <td class="first-td">
                    <span>お問い合わせの内容</span>
                    <span class="require-span">必須</span>
                  </td>
                  <td>
                    <v-textarea></v-textarea>
                  </td>
                </tr>
              </tbody>
            </v-simple-table>
          </div>
          <div class="text-center">
            <v-btn class="px-16 py-7 mt-12 confirm-btn">確認画面へ</v-btn>
          </div>
        </v-col>
        <v-col class="sidebar" md="3">
          <v-btn class="py-7 post-btn">掲載ご希望の方はコチラ</v-btn>
          <div class="font font--6 font--dark font-weight-bold px-3 py-6">
            <v-icon class="mr-2">mdi-file-search-outline</v-icon
            >目的からお店を探す
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import BreadComponent from '~/components/BreadComponent.vue'
export default {
  name: 'ContactPage',
  components: { BreadComponent },
  created() {
    this.setBreadData('お問い合わせ', '/contact')
  },
  methods: {
    setBreadData(subtitle, subhref) {
      this.$store.commit('SET_BREAD_DATA', subtitle, subhref)
    },
  },
}
</script>
