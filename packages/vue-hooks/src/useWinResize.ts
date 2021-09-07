import { watchEffect } from 'vue'
import { debounce, ownAddEventListener } from '@chenzl/utils'

/**
 * when window seize change, call the fn
 * @public
 */
export function useWinResize(fn: Fn, timeout = 300): void {
	watchEffect((onInvalidate) => {
		const resizeEvent = ownAddEventListener(window, 'resize', debounce(fn, timeout))
		onInvalidate(() => {
			resizeEvent()
		})
	})
}
