import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import { createSamplePlugin, type SamplePluginOptions } from 'vue-sample-plugin'

const app = createApp(App)

const sample = createSamplePlugin()
const pluginOption: SamplePluginOptions = {
  param1: 'Hello Vue Plugin',
  param2: 15,
}
app.use(sample, pluginOption)

app.mount('#app')
