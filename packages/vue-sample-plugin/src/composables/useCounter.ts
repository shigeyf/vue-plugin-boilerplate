// packages/vue-sample-plugin/src/composables/useCounter.ts

// Plugin Modules
import { SamplePlugin } from '../plugin'
// External Modules
import { getCurrentInstance, toRefs } from 'vue'

/**
 * useCounter
 * @returns An object with reactivity
 * @public
 */
export function useCounter() {
  const internalInstance = getCurrentInstance()
  if (!internalInstance) {
    throw 'useCounter() cannot be called outside the setup() function of a component.'
  }

  const { count } = toRefs<SamplePlugin>(internalInstance.appContext.config.globalProperties.$sample)
  /* eslint-disable vue/no-ref-as-operand */
  if (!count) {
    throw 'useCounter() cannot be called without installing plugin.'
  }

  const addCount = () => {
    count.value = count.value + 1
    console.log(`Add count + 1 = ${count.value}`)
  }

  return {
    count: count,
    addCount: addCount,
  }
}
