<template>
  <div class="">
    <div class="font font--6 font--dark font-weight-bold mb-4 text-center">
      口コミを削除する場合は、削除したい口コミにチェックを入れた後「選択した口コミを削除」を押してください
    </div>
    <div>
      <div class="font font--dark font-weight-bold py-2 table-head-div">
        <span>ニックネームさんが投稿した口コミ (全15件)</span>
        <span class="review-page-result">1~10件表示/全3ページ</span>
      </div>
      <div class="font font--5 font--gray font-weight-bold d-md-flex table-sort-div">
      </div>
      <v-data-table>
        
      </v-data-table>
    </div>
  </div>
</template>

<script>
export default {
 name: 'MyReview',
}
</script>
