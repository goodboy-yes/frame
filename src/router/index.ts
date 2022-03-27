import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import { configure, start, done } from 'nprogress'
import { RouterList } from './types'
import { useAppStore } from '@/store'
import { decode } from '@/utils'
// import loginApi from '@/api/views/login/index'
// import { generatorDynamicRouter } from './asyncRouter'
configure({ showSpinner: false })
let asyncComponents: RouterList[] = []
const loginRoutePath = '/login'

const modulesFiles = import.meta.globEager('./routes/*.ts')
Object.keys(modulesFiles).forEach(path => {
	asyncComponents = asyncComponents.concat(modulesFiles[path].default)
})

export const allowRouter: RouterList[] = [
	{
		// 首页
		path: '/',
		name: 'Layout',
		redirect: '/home',
		component: () => import('@/layout/index.vue'),
		meta: { title: 'Layout' },
		children: [
			{
				path: 'home',
				component: () => import('@/view/homePage/index.vue'),
				name: 'homePage',
				meta: { title: 'homePage' },
			},
			{
				path: 'bigScreen',
				component: () => import('@/view/bigScreen/index.vue'),
				name: 'bigScreen',
				meta: { title: 'bigScreen' },
			},
			{
				path: 'zhijianbS',
				component: () => import('@/view/zhijianbS/index.vue'),
				name: 'zhijianbS',
				meta: { title: 'zhijianbS' },
			},
		],
	},
	{
		path: '/login',
		component: () => import('@/view/login/index.vue'),
		name: 'login',
		meta: { title: 'login' },
	},
	{
		path: '/404',
		component: () => import('@/view/404.vue'),
		name: '404',
		meta: { title: '404' },
	},
	{
		path: '/:pathMatch(.*)*',
		name: 'NotFound',
		component: () => import('@/view/404.vue'),
		meta: {
			title: 'NotFound',
			icon: '',
			hidden: true,
		},
	},
]
const router = createRouter({
	history: createWebHashHistory(),
	routes: allowRouter as RouteRecordRaw[],
})

// 获取动态路由
// const getDynamicRouter = () => {
// 	return new Promise<RouterList[]>(resolve => {
// 		loginApi.getRouterList().then((res: any) => {
// 			const { data } = res
// 			const dynamicRouter = generatorDynamicRouter(data)
// 			console.log('dynamicRouter', dynamicRouter)
// 			resolve(dynamicRouter)
// 		})
// 	})
// }

// 设置切换路由取消之前请求
let isRouterInit = false
const requestControl = () => {
	const { handleAbort, setController } = useAppStore()
	if (isRouterInit) {
		handleAbort() // 取消请求
	} else {
		isRouterInit = true
	}
	setController(new AbortController())
}

// 路由守卫
router.beforeEach(async to => {
	start()
	requestControl()

	const { defaultRoutePath, isLogin, routerList, initIsLogin, setRoutes } =
		useAppStore()

	// 初始化登录状态
	if (isLogin === null) {
		initIsLogin()
	}

	// 进入登录页路由如果是已登录状态则跳转对应路由
	if (to.path.toLocaleLowerCase() === loginRoutePath.toLocaleLowerCase()) {
		if (isLogin) {
			return typeof to.query.from === 'string'
				? decode(to.query.from)
				: defaultRoutePath
		}
		return
	}

	// 判断是否登录
	if (!isLogin) {
		return loginRoutePath
	}

	// 判断是否还没添加过路由
	// if (routerList.length === 0) {
	// 	const dynamicRouter = await getDynamicRouter()
	// 	allowRouter[0].children!.push(...dynamicRouter)
	// 	setRoutes(allowRouter)
	// 	for (let i = 0; i < allowRouter.length; i++) {
	// 		router.addRoute(allowRouter[i] as RouteRecordRaw)
	// 	}
	// 	return to.fullPath
	// }
})
router.afterEach(() => {
	// 关闭进度条
	done()
})
export default router
