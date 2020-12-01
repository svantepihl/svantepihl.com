// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api
require('typeface-open-sans')
require('vue2-animate/dist/vue2-animate.min.css')
import DefaultLayout from '~/layouts/Default.vue'
import VueSmoothScroll from 'vue2-smooth-scroll'

export default function (Vue, { router, head, isClient }) {
  head.script.push({
    src: "https://www.googletagmanager.com/gtag/js?id=G-9CKBRVSDLP",
    async: true
  })
  head.script.push({
    innerHtml: 
    `window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
  
    gtag('config', 'G-9CKBRVSDLP');`
  })
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
  Vue.use(VueSmoothScroll, {
    duration: 3000,
    updateHistory: true,
  })
}
