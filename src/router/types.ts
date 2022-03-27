import { DefineComponent } from 'vue'
export interface RouterList {
	pid?: number | string
	id?: number | string
	type?: number | string
	name: string
	path: string
	redirect?: string | { name: string }
	meta: {
		icon?: string
		title: string
		isCache?: boolean // 页面是否缓存
		hidden?: boolean // 是否隐藏路由,
		permission?: string | string[]
		alwaysShow?: boolean
	}
	component:
		| (() => Promise<typeof import('*.vue')>)
		| string
		| DefineComponent<any>
	children?: Array<RouterList>
}
