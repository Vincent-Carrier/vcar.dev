export const $ = (query, el = document) => el.querySelector(query)

export const $$ = (query, el = document) => Array.from(el.querySelectorAll(query))

export const cssVar = (name, el = document.body) => {
	return getComputedStyle(el).getPropertyValue(`--${name}`)
}

export function* range(from, to, step = 1) {
	for (let i = from; i <= to; i += step) {
		yield i
	}
}
