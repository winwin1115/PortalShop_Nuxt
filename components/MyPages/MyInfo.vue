<template>
  <div>
    <div class="font font--6 font--dark font-weight-bold form-div">
      <div class="mb-4">
        情報を変更する場合は、内容を変更した後「変更を保存」を押してください
      </div>
      <v-simple-table>
        <tbody>
          <tr>
            <td class="first-td">
              <span>ニックネーム</span>
            </td>
            <td>
              <v-text-field value="ニックネーム"></v-text-field>
            </td>
          </tr>
          <tr>
            <td rowspan="2" class="first-td">
              <span>メールアドレス</span>
            </td>
            <td>
              <v-text-field value="name@sitename.com"></v-text-field>
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
            <td rowspan="2" class="first-td">
              <span>パスワード</span>
            </td>
            <td>
              <v-text-field
                :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                :type="show1 ? 'text' : 'password'"
                @click:append="show1 = !show1"
                value="123456789101"
              ></v-text-field>
            </td>
          </tr>
          <tr>
            <td>
              <v-text-field
                :type="show2 ? 'text' : 'password'"
                placeholder="もう一度入力してください"
              ></v-text-field>
            </td>
          </tr>
          <tr>
            <td class="first-td">
              <span>性別</span>
            </td>
            <td>
              <v-select
                class="select-slot"
                :items="['Foo', 'Bar']"
                label="性別を選択"
              >
              </v-select>
            </td>
          </tr>
          <tr>
            <td class="first-td">
              <span>年代</span>
            </td>
            <td>
              <v-select
                class="select-slot"
                :items="['Foo', 'Bar']"
                label="年代を選択"
              >
              </v-select>
            </td>
          </tr>
        </tbody>
      </v-simple-table>
    </div>
    <div class="text-center">
      <v-btn class="px-16 py-7 mt-12 confirm-btn">変更を保存</v-btn>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MyInfo',
  data() {
    return {
      show1: false,
      show2: false,
    }
  },
}
</script>
