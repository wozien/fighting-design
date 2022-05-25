import { createApp } from 'vue'
import App from './src/App.vue'

// 引入组件
// import FightingDesign from '../dist'
// import '../dist/theme/index.css'

import FightingDesign from '@fighting-design/fighting-components'
import '@fighting-design/fighting-theme'

console.log(FightingDesign)

createApp(App).use(FightingDesign).mount('#start')
