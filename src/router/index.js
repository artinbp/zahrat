import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/test',
    name: 'test',
    meta: { requiresAuth: true },
    component: () => import('../views/testModules.vue'),
  },{
    path: '/login',
    name: 'loginPage',
    meta: { requiresAuth: true },
    component: () => import('../views/login/loginPage.vue'),
  },
  {
    path: '/m',
    name: 'mobileTemplate',
    meta: { requiresAuth: true },
    redirect: '/m/flight',
    component: () => import('../views/m/template.vue'),
    children: [
      {
        path: 'flight',
        name: 'flightM',
        component: () => import('../views/m/flight/template.vue'),
        children: [
          {
            path: '',
            name: 'flightM',
            component: () => import('../views/m/flight/HomeIndex.vue')
          },
          {
            path: 'search',
            name: 'flightSearchM',
            component: () => import('../views/m/flight/searchPage.vue')
          },
          {
            path: 'get-passenger',
            name: 'flightPassengerM',
            component: () => import('../views/m/flight/getPassenger.vue')
          },
          {
            path: 'check',
            name: 'CheckOutM',
            component: () => import('@/views/m/flight/CheckOut.vue')
          },
          {
            path: 'pay',
            name: 'payDetailsM',
            component: () => import('@/views/m/flight/payTicket.vue')
          },
          {
            path: 'get-ticket',
            name: 'receiveTicketM',
            component: () => import('@/views/m/flight/receiveTicket.vue')
          }
        ]
      }, {
        path: '/hotel',
        name: 'hotelM',
        component: () => import('../views/m/hotel/template.vue'),
        children: [
          {
            path: '',
            name: 'hotelM',
            component: () => import('../views/m/hotel/HomeIndex.vue')
          }
        ]
      }
    ]
  },
  {
    path: '/',
    name: 'home',
    redirect: '/flight',
    meta: { requiresAuth: true },
    component: () => import('../views/template.vue'),
    children: [
      {
        path: '/flight',
        name: 'flight',
        component: () => import('../views/flight/template.vue'),
        children: [
          {
            path: '',
            name: 'flight',
            component: () => import('../views/flight/HomeIndex.vue')
          },
          {
            path: 'search',
            name: 'flightSearch',
            component: () => import('../views/flight/searchPage.vue')
          },
          {
            path: 'get-passenger',
            name: 'flightPassenger',
            component: () => import('../views/flight/getPassenger.vue')
          },
          {
            path: 'check',
            name: 'CheckOut',
            component: () => import('@/views/flight/CheckOut.vue')
          },
          {
            path: 'pay',
            name: 'payDetails',
            component: () => import('@/views/flight/payTicket.vue')
          },
          {
            path: 'get-ticket',
            name: 'receiveTicket',
            component: () => import('@/views/flight/receiveTicket.vue')
          }
        ]
      }, {
        path: '/hotel',
        name: 'hotel',
        component: () => import('../views/hotel/template.vue'),
        children: [
          {
            path: '',
            name: 'hotel',
            component: () => import('../views/hotel/HomeIndex.vue')
          }
        ]
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior (to, from, savedPosition) {
    return savedPosition || { top: 0 }
  }
})

export default router
