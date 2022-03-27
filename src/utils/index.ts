/**
 * 两次编码url
 * @param url
 * @returns
 */
export function decode(url: string): string {
	return decodeURIComponent(decodeURIComponent(url))
}
