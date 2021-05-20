import Vue from 'vue'
import login from "@/components/login";
import CoursePage from "@/components/CourseComponents/CoursePage";
import '@/assets/css/tailwind.css'

Vue.config.productionTip = false

const NotFoundComponent = { template: '<p>Page not found</p>' }
const LoginComponent = login
const AboutComponent = { template: '<p>About page</p>' }
const CourseComponent = CoursePage

const routes = {
  '/': LoginComponent,
  '/index': LoginComponent,
  '/login': LoginComponent,
  '/course': CourseComponent,
  '/about': AboutComponent,
  '/school': LoginComponent,
  '/todo': LoginComponent,
  '/square': LoginComponent
}

new Vue({
  data: () => ({
    currentRoute: window.location.pathname
  }),

  computed: {
    CurrentComponent() {
      return routes[this.currentRoute] || NotFoundComponent
    }
  },

  render(h) {
    return h(this.CurrentComponent)
  }
}).$mount("#app")
