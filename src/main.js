import Vue from 'vue'
import ElementUI  from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
import VueRx from 'vue-rx';

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(VueRx)

new Vue({
  render: h => h(App),
}).$mount('#app')
