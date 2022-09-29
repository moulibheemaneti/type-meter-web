import 'element-plus/dist/index.css'
import ElementPlus from 'element-plus'

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(ElementPlus)
})
