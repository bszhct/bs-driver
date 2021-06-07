import Vue from 'vue'
import App from '@/app.vue'
import router from '@/router'
import Kit from '@/components/layout'
import BsDriver from '@/components'

Vue.config.productionTip = false

Vue.use(Kit)
Vue.use(BsDriver)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
