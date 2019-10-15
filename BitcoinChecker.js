new Vue({
  el: "#app",
  data: {
    bpi: null,
    hasError: false,
    loading: true
  },
  mounted: function () {
    axios.get('https://api.coindesk.com/v1/bpi/currentprice.json')
      .then(function (response) {
        // bindが無いとthisはwindowオブジェクトを指す。bind(this)によりthisがvueインスタンスになる。
        // this.bpiでdataオブジェクトのbpiプロパティに値を設定する。
        this.bpi = response.data.bpi
      }.bind(this))
      // エラーハンドリング
      .catch(function (error) {
        console.log(error)
        this.hasError = true
      }.bind(this))
      // 通信終了時に実行される処理
      .finally(function () {
        // ローディング中の表示を終了する処理
        this.loading = false
      }.bind(this))
  },
  filters: {
    currencyDecimal(value) {
      return value.toFixed(2)
    }
  }
})