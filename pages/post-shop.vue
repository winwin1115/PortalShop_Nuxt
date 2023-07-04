<template>
  <div>
    <bread-component />
    <v-container class="content-container">
      <v-row>
        <v-col class="main-content" md="9">
          <div class="font font--2 font--dark font-weight-bold mb-2 main-title">
            お店情報を入力
          </div>
          <div
            class="font font--6 font--dark font-weight-bold py-3 text-center"
          >
            掲載ご希望の方は以下のフォームに入力して送信してください
          </div>
          <div class="font font-weight-bold pt-3 form-div">
            <v-simple-table>
              <tbody>
                <tr>
                  <td class="first-td">
                    <span>貴店名</span>
                    <span class="require-span">必須</span>
                  </td>
                  <td>
                    <v-text-field></v-text-field>
                  </td>
                </tr>
                <tr>
                  <td class="first-td">
                    <span>ご担当者名</span>
                    <span class="require-span">必須</span>
                  </td>
                  <td>
                    <v-text-field></v-text-field>
                  </td>
                </tr>
                <tr>
                  <td class="first-td">
                    <span>貴店のカテゴリ</span>
                    <span class="require-span">必須</span>
                  </td>
                  <td>
                    <v-select
                      class="select-slot"
                      :items="['Foo', 'Bar']"
                      label="カテゴリを選択"
                    >
                    </v-select>
                  </td>
                </tr>
                <tr>
                  <td rowspan="3" class="first-td">
                    <span>貴店の住所</span>
                    <span class="require-span">必須</span>
                  </td>
                  <td>
                    <v-row>
                      <v-col class="letter-td" cols="12" md="3">
                        <span>郵便番号</span>
                      </v-col>
                      <v-col cols="12" md="2">
                        <v-text-field placeholder="123"></v-text-field>
                      </v-col>
                      <v-col class="from-to" cols="12" md="1"> - </v-col>
                      <v-col class="to-input" cols="12" md="2">
                        <v-text-field placeholder="4567"></v-text-field>
                      </v-col>
                    </v-row>
                  </td>
                </tr>
                <tr>
                  <td>
                    <v-row>
                      <v-col class="letter-td" cols="12" md="3">
                        <span>都道府県</span>
                      </v-col>
                      <v-col cols="12" md="9">
                        <v-select
                          class="select-slot"
                          :items="['Foo', 'Bar']"
                          label="都道府県を選択"
                        >
                        </v-select>
                      </v-col>
                    </v-row>
                  </td>
                </tr>
                <tr>
                  <td>
                    <v-row>
                      <v-col class="letter-td" cols="12" md="3">
                        <span>市区郡以下</span>
                      </v-col>
                      <v-col cols="12" md="9">
                        <v-text-field></v-text-field>
                      </v-col>
                    </v-row>
                  </td>
                </tr>
                <tr>
                  <td class="first-td">
                    <span>貴店の電話番号</span>
                    <span class="require-span">必須</span>
                  </td>
                  <td>
                    <v-text-field placeholder="01012345678"></v-text-field>
                  </td>
                </tr>
                <tr>
                  <td class="first-td">
                    <span>メールアドレス</span>
                    <span class="require-span">必須</span>
                  </td>
                  <td>
                    <v-text-field
                      placeholder="もう一度入力してください"
                    ></v-text-field>
                  </td>
                </tr>
                <tr>
                  <td class="first-td">
                    <span>貴店のURL</span>
                    <span class="require-span">必須</span>
                  </td>
                  <td>
                    <v-text-field placeholder="sitename.com"></v-text-field>
                  </td>
                </tr>
                <tr>
                  <td class="first-td">
                    <span>ご質問・ご要望など</span>
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
        <v-col class="sidebar" md="3"> </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import BreadComponent from '~/components/BreadComponent.vue'
export default {
  name: 'PostShop',
  components: { BreadComponent },
  created() {
    this.setBreadData('お店情報を入力', '/contact')
  },
  methods: {
    setBreadData(subtitle, subhref) {
      this.$store.commit('SET_BREAD_DATA', subtitle, subhref)
    },
  },
}
</script>
