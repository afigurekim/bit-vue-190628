import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Footer from '@/components/common/Footer'
import JumboTron from '@/components/common/JumboTron'
import Nav from '@/components/common/Nav'
import Calculator from '@/components/basic/Calculator'
import JoinForm from '@/components/member/JoinForm'
import MemberList from '@/components/member/MemberList'
import LoginForm from '@/components/member/LoginForm'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', name: 'home', component: Home },
    { path: '/calculator', name: 'calculator', component: Calculator },
    { path: '/joinform', name: 'joinform', component: JoinForm },
    { path: '/loginform', name: 'loginform', component: LoginForm },
    { path: '/memberlist', name: 'memberlist', component: MemberList },
    { path: '/footer', name: 'footer', component: Footer },
    { path: '/jumbotron', name : 'jumbotron', component: JumboTron },
    { path: '/nav', name : 'nav', component: Nav },
  ]
})