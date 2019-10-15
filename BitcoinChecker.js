new Vue({
  el: "#app",
  data: {
    bpi: null,
  },
  mounted: function () {
    axios.get('https://api.coindesk.com/v1/bpi/currentprice.json')
      .then(function (response) {
        // bindが無いとthisはwindowオブジェクトを指す。bind(this)によりthisがvueインスタンスになる。
        // this.bpiでdataオブジェクトのbpiプロパティに値を設定する。
        this.bpi = response.data.bpi
      }.bind(this))
      .catch(function (error) {
        console.log(error)
      }.bind(this))
  },
  filters: {
    currencyDecimal(value) {
      return value.toFixed(2)
    }
  }
})