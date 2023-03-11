import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import Contain from '@/components/contain.vue'
Vue.component('Con',Contain)

new Vue({
  render: h => h(App),
}).$mount('#app')
