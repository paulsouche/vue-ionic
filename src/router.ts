import Vue from 'vue'
import VueRouter from 'vue-router';
import HomePage from './components/pages/home.page';
import AboutPage from './components/pages/about.page';
import ContactPage from './components/pages/contact.page';

Vue.use(VueRouter);

const routes = [
  {
    path: '',
    redirect: '/home',
  },
  {
    path: '/home',
    component: HomePage,
  },
  {
    path: '/about',
    component: AboutPage,
  },
  {
    path: '/contact',
    component: ContactPage,
  },
]

export default new VueRouter({ routes });

