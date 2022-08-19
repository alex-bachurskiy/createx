import Vue from 'vue'
import VueRouter from 'vue-router'

import VueCarousel from 'vue-carousel';
Vue.use(VueCarousel);


import VueScrollTo from 'vue-scrollto'

Vue.use(VueRouter)

Vue.use(VueScrollTo, {
  container: "body",
  duration: 1500,
  easing: "ease-in-out",
  offset: 0,
  force: true,
  cancelable: true,
  onStart: false,
  onDone: false,
  onCancel: false,
  x: false,
  y: true
})


import Home from '../views/home.vue';
import AboutUs from '../views/about-us.vue';
import Courses from '../views/courses.vue';
import Blog from '../views/blog.vue';
import SinglePost from '../views/single-post.vue';
import CoursePage from '../views/course-page.vue';
import EventsList from '../views/events-list.vue';
import EventsGrid from '../views/events-grid.vue';
import EventPage from '../views/event-page.vue';
import Contacts from '../views/contacts.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about-us',
    name: 'AboutUs',
    component: AboutUs
  },
  {
    path: '/courses',
    name: 'Courses',
    component: Courses
  },
  {
    path: '/blog',
    name: 'Blog',
    component: Blog
  },
  {
    path: '/blog/single-post',
    name: 'SinglePost',
    component: SinglePost 
  },
  {
    path: '/courses/course-page',
    name: 'CoursePage',
    component: CoursePage
  },
  {
    path: '/events',
    name: 'EventsList',
    component: EventsList
  },
  {
    path: '/events/events-grid',
    name: 'EventsGrid',
    component: EventsGrid
  },
  {
    path: '/events/event-page',
    name: 'EventPage',
    component: EventPage
  },
  {
    path: '/contacts',
    name: 'contacts',
    component: Contacts
  }
]

const router = new VueRouter({
  routes,
  scrollBehavior() {
		return { x: 0, y: 0 }
	},
})

export default router