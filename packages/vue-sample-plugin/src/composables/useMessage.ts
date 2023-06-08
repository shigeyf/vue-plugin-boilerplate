// packages/vue-sample-plugin/src/composables/useMessage.ts

// Plugin Modules
import { SamplePlugin } from '../plugin'
// External Modules
import { getCurrentInstance, toRefs } from 'vue'

/**
 * useMessage
 * @returns An object with reactivity
 * @public
 */
export function useMessage() {
  const internalInstance = getCurrentInstance()
  if (!internalInstance) {
    throw 'useCounter() cannot be called outside the setup() function of a component.'
  }

  const { message } = toRefs<SamplePlugin>(internalInstance.appContext.config.globalProperties.$sample)
  /* eslint-disable vue/no-ref-as-operand */
  if (!message) {
    throw 'useCounter() cannot be called without installing plugin.'
  }

  return {
    message: message,
  }
}
