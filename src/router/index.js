import Vue from 'vue'
import Router from 'vue-router'
import recommend from './recommend'
import rankingList from './rankingList'
import search from './search'
import singers from './singers'
import songSheet from './songSheet'
import user from './user'

Vue.use(Router)

export default new Router({
  mode: 'history',
  linkActiveClass: 'active',
  routes: [
    recommend,
    rankingList,
    search,
    singers,
    songSheet,
    user,
    {
      path: '*',
      redirect: '/'
    }
  ]
})
