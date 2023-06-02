import { createApp } from 'vue'
import './style.css'
import store from './store'
import router from './router'
import ElementUI from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import api from './axios/api'
import i18n from './lang/i18n'
import pinia from './store'
// import VueParticles from 'vue-particles'//粒子特效
// import Particles from "particles.vue3";
import Particles from "vue3-particles";
const app = createApp(App)

// Vue.prototype.$api = api; vue2挂载全局方法

app.config.globalProperties.$api = api

app.use(ElementUI).use(router).use(store).use(Particles).use(i18n).use(pinia).mount('#app')
// app.use(VueParticles)
