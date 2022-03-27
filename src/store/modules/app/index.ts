import { defineStore } from 'pinia'
import { AppState } from './types'
import { RouterList } from '@/router/types'
const useAppStore = defineStore('app', {
	state: (): AppState => ({
		publicKey:
			'-----BEGIN PUBLIC KEY-----MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDKRXq3p8VoLB4P5H3aeIbwABaXJNDDfAXX/ePpY/kXCnIQbZOaxgxVOP2bYnldDxgQ3j9OiUq2celccy4ohROcGA7JCmkDqKCcLHyRlxYScbFOhO5EDac/DsRytebt03R/H1wSfVloIbIMIjN2tN+58RxUxLUhITyPGwLngPjf+wIDAQAB-----END PUBLIC KEY-----',
		defaultRoutePath: 'home',
		userInfo: {
			avatar: '',
			cardNo: '',
			email: '',
			id: '',
			phone: '',
			loginId: '',
			name: '',
			sex: 0,
		},
		isLogin: null,
		title: '建筑与产权一体化数仓管理系统',
		routerList: [],
		controller: new AbortController(),
	}),
	getters: {},
	actions: {
		// 判断是否是登录状态：有token，有isLogin
		initIsLogin(): void {
			const { cookie } = document
			const isCookie = cookie.indexOf('isLogin=1') > -1
			const token = localStorage.getItem('TOKEN')
			const isToken = token && token !== 'undefined'
			this.isLogin = Boolean(isCookie && isToken)
		},

		setRoutes(data: Array<RouterList>): void {
			this.routerList = data
		},

		setController(controller: AbortController) {
			this.controller = controller
		},

		handleAbort() {
			this.controller.abort()
		},
	},
})

export default useAppStore
