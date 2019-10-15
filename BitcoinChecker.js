new Vue({
  el: "#app",
  data: {
    bpi: null,
    hasError: false
  },
  mounted: function () {
    axios.get('https://api.coindesk.com/v1/bpi/currentprice.json')
      .then(function (response) {
        // bindが無いとthisはwindowオブジェクトを指す。bind(this)によりthisがvueインスタンスになる。
        // this.bpiでdataオブジェクトのbpiプロパティに値を設定する。
        this.bpi = response.data.bpi
        console.log(this.bpi)
      }.bind(this))
      .catch(function (error) {
        console.log(error)
        this.hasError = true
      }.bind(this))
  },
  filters: {
    currencyDecimal(value) {
      return value.toFixed(2)
    }
  }
})