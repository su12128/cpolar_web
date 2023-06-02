import { createI18n } from 'vue-i18n' //引入vue-i18n组件
import messages from './index'
const language = (
  (navigator.language ? navigator.language : navigator.userLanguage) || "ch"
).toLowerCase();
const i18n = createI18n({
  fallbackLocale: 'ch',//预设语言环境
  globalInjection:true,
  legacy: false, // you must specify 'legacy: false' option
  locale: language.split("-")[0] || "ch",//默认显示的语言 
  messages,//本地化的语言环境信息。
});

export default i18n
