import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import StudentRegister from '../views/student/StudentRegistrationCom.vue'
import LecuteRegister from '../views/leceture/LectureRegistrationCom.vue'
import KuppiRequest from '../views/KuppiRequest/kuppiRequest.vue' 
import RevisionReq from '../views/RevisionRequest/RevisionRequest.vue' 
import Login from '../views/Login.vue' 
import LoginLecture from '../views/LectureLogin.vue'
import homeOrg from '../views/HomeOrg/HomeOrg.vue'
import profile from '../views/user_profile/userProfile.vue'
import welcome from '../views/Welcome/welcome.vue'
import updateProfile from '../views/UpdateProfile/updateProfile.vue'
import testing from '../views/Test/test.vue'
import createPost from '../views/Create_post/create_post.vue'
import learn from '../views/LearnPlus/learnplus.vue'
import admin from '../views/admin/admin.vue'
import RFO from '../views/RFO/RFO.vue'
import kuppiAccept from '../views/KuppiAccept/kuppiAccept.vue'
//IMPORT PATH

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // {
    //   path: '/',
    //   name: 'home',
    //   component: HomeView
    // },
    {
      path: '/student/register', //PATH OF FOLDER
      name: 'StudentRegister', //AS YOU WISH
      component: StudentRegister //IMPORT NAME
    },
    {
      path: '/leceture/register',
      name: 'LecuteRegister',
      component: LecuteRegister
    },

    {
      path: '/kuppiRequest',
      name: 'Kuppiregister',
      component: KuppiRequest

    },

    {
      path: '/Login/Lecture',
      name: 'LoginLecture',
      component: LoginLecture
    },
    

    {
      path: '/Login',
      name: 'Login',
      component: Login
    },

    {
      path: '/RevisionRequest',
      name: 'RevisionRequest',
      component: RevisionReq
    },

    {
      path:'/',
      name:'welcome',
      component: welcome
    },

    {
      path:'/user/profile',
      name:'profile',
      component:profile
    },

    {
      path:'/home',
      name:'homeOrg',
      component:homeOrg
    },
   
    {
      path:'/updateProfile',
      name:'updateProfile',
      component:updateProfile
    },
   
    {
      path:'/test',
      name:'testing',
      component:testing
    },

    {
      path:'/createPost',
      name:'createpost',
      component:createPost
    },

    {
      path:'/learns',
      name:'learn',
      component:learn
    },
    {
      path: '/admin',
      name: 'admin',
      component:admin
    },
    {
      path: '/RFO',
      name: 'RFO',
      component:RFO
    },
    {
      path: '/kuppiAccept',
      name: 'kuppiAccept',
      component:kuppiAccept
    },
  ]
})

export default router
