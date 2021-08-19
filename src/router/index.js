import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
	{
		path: "/",
		name: "Home",
		component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue')
	},
	{
		path: "/post/:id",
		name: "Single_Post",
		component: () => import(/* webpackChunkName: "single_post" */ '../views/Post/Single.vue')
	},
	{
		path: "/discussion/:id",
		name: "Discussion",
		component: () => import(/* webpackChunkName: "discussion" */ '../views/Discussion/Single.vue')
	},

]

const router = new VueRouter({
	mode: "history",
	routes: routes
})

export default router
