// packages/vue-sample-plugin/src/plugin.ts

import type { App } from 'vue'
import { reactive } from 'vue'
import { VuePlugin } from './VuePlugin'

/**
 * Type SamplePluginOptions
 * @public
 */
export type SamplePluginOptions = {
  param1: string
  param2: number
}

/**
 * Class SamplePlugin
 * @public
 */
export class SamplePlugin implements VuePlugin {
  message: string
  count: number

  constructor() {
    this.message = 'Initialized'
    this.count = 0
  }

  install(app: App, options: SamplePluginOptions) {
    this.message = options.param1
    this.count = options.param2

    const state = reactive(this)
    app.config.globalProperties.$sample = state
    app.provide('$sample', state)
  }
}

/**
 * Creates a plugin instance to be used by the application
 * @public
 */
export function createSamplePlugin(): SamplePlugin {
  const pluginInstance = new SamplePlugin()
  return pluginInstance
}
