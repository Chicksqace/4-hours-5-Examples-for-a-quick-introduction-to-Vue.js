/*
  请求地址:http://wthrcdn.etouch.cn/weather_mini
  请求方法:get
  请求参数:city(城市名)
  响应内容:天气信息

  1. 点击回车
  2. 查询数据
  3. 渲染数据
  */
var app = new Vue({
  el: '#app',
  data: {
    city: '',
    weatherList: []
  },
  methods: {
    searchWeather() {
      // console.log(this.city);
      var that = this
      axios
        .get('http://ajax-api.itheima.net/api/weather?city=' + this.city)
        .then(function (res) {
          // console.log(res.data.data.data);
          that.weatherList = res.data.data.data
          console.log(that.weatherList)
        })
        .catch(function (err) {})
    },
    changecity(city) {
      this.city = city
      this.searchWeather()
    }
  }
})
