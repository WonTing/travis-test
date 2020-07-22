import Vue from 'vue'
import App from './App.vue'
import Skeleton from 'vue-loading-skeleton'
import './registerServiceWorker'

Vue.config.productionTip = false
Vue.use(Skeleton)

new Vue({
  render: h => h(App)
}).$mount('#app')
