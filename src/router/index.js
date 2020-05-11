import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Main from '../views/Main.vue'
import CategoryEdit from '../views/CategoryEdit.vue'
import CategoryList from '../views/CategoryList.vue'
import ItemEdit from '../views/ItemEdit.vue'
import ItemList from '../views/ItemList.vue'
import HeroEdit from '../views/HeroEdit.vue'
import HeroList from '../views/HeroList.vue'
import ArticlesEdit from '../views/ArtclesEdit.vue'
import ArticlesList from '../views/ArtclesList.vue'
import AdEdit from '../views/AdEdit.vue'
import AdList from '../views/AdList.vue'
import AdminUserEdit from '../views/AdminUserEdit.vue'
import AdminUserList from '../views/AdminUserList.vue'

Vue.use(VueRouter)

  const routes = [
    {
      path:'/login',
      name:'login',
      component:Login,
      meta:{isPublic:true}
    },
  
    {
      path: '/',
      name: 'Main',
      component: Main,
      children:[
        {
          path:'/categories/create',
          name:'category-edit',
          component:CategoryEdit
        },
        {
          path:'/categories/edit/:id',
          component:CategoryEdit,
          props:true
        },
        {
          path:'/categories/list',
          name:'category-list',
          component:CategoryList
        },


        {
          path:'/items/create',
          name:'item-edit',
          component:ItemEdit
        },
        {
          path:'/items/edit/:id',
          component:ItemEdit,
          props:true
        },
        {
          path:'/items/list',
          name:'item-list',
          component:ItemList
        },

        {
          path:'/heroes/create',
          name:'hero-edit',
          component:HeroEdit
        },
        {
          path:'/heroes/edit/:id',
          component:HeroEdit,
          props:true
        },
        {
          path:'/heroes/list',
          name:'hero-list',
          component:HeroList
        },

        {
          path:'/artcles/create',
          name:'artcles-edit',
          component:ArticlesEdit
        },
        {
          path:'/artcles/edit/:id',
          component:ArticlesEdit,
          props:true
        },
        {
          path:'/artcles/list',
          name:'artcles-list',
          component:ArticlesList
        },

        {
          path:'/ads/create',
          name:'ads-edit',
          component:AdEdit
        },
        {
          path:'/ads/edit/:id',
          component:AdEdit,
          props:true
        },
        {
          path:'/ads/list',
          name:'ads-list',
          component:AdList
        },

        {
          path:'/admin_users/create',
          name:'admin_users-edit',
          component:AdminUserEdit
        },
        {
          path:'/admin_users/edit/:id',
          component:AdminUserEdit,
          props:true
        },
        {
          path:'/admin_users/list',
          name:'admin_users-list',
          component:AdminUserList
        },


        
      ]
    },

  
  
]

const router = new VueRouter({
  routes
})
router.beforeEach((to,from,next) => {
  if(!to.meta.isPublic && !localStorage.token){
    return next('/login')
  }
  next()
})
export default router
