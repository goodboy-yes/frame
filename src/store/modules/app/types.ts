import { RouterList } from '@/router/types'
export interface UserInfo {
	avatar: string
	cardNo: string
	email: string
	id: string
	phone: string
	loginId: string
	name: string
	sex: number
	auditTips?: null | string
	lockFlag?: null | string
	orgId?: null | string
	orgNames?: null | string
	positionId?: null | string
	positionNames?: null | string
	state?: null | string
}

export interface AppState {
	publicKey: string
	defaultRoutePath: string
	userInfo: UserInfo
	isLogin: boolean | null
	title: string
	routerList: RouterList[]
	controller: AbortController
}
