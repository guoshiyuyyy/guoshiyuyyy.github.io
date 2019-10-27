import Vue from 'vue'
import Router from 'vue-router'
import index from './component/index.vue'
import shou from './component/shou.vue'
import no1 from './component/no1.vue'
import no2 from './component/no2.vue'
import no3 from './component/no3.vue'
import no4 from './component/no4.vue'
import no5 from './component/no5.vue'

Vue.use(Router)

var routes = [{
    path: '/',
    name: 'index',
    component: index
  },
  {
    path: '/shou',
    name: 'shou',
    component: shou
  },
  {
    path: '/no1',
    name: 'no1',
    component: no1
  },
  {
    path: '/no2',
    name: 'no2',
    component: no2
  },
  {
    path: '/no3',
    name: 'no3',
    component: no3
  },
  {
    path: '/no4',
    name: 'no4',
    component: no4
  },
  {
    path: '/no5',
    name: 'no5',
    component: no5
  },

]

var router = new Router({
	routes
})

export  default router
