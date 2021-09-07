/**
 * @public
 */
export function deepMerge<T = any>(src: any, target: any): T {
	let key: string
	for (key in target) {
		src[key] = src[key] && src[key].toString() === '[object Object]' ? deepMerge(src[key], target[key]) : (src[key] = target[key])
	}
	return src
}
