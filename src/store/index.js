import { createPinia, defineStore } from 'pinia'
import support_lan from '@/lang'
import lang_list from '@/lang/config.js'
import i18n from '@/lang/i18n'



const pinia = createPinia()

export const i18nStore = defineStore('i18n_store', {
    state: () => {
        return {
            language: 'ch',
            lang_list
        }
    },
    getters: {},
    actions: {
        change_language(language) {
            console.log(language, "language")
            if (support_lan.hasOwnProperty(language)) {
                this.lang_list = language
                console.log(i18n.global.locale.value)
                i18n.global.locale.value = language
            }
            else {
                console.log('没有该语言的值')
            }
        }
    },
})

export default pinia
