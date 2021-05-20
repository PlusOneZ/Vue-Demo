import Vue from 'vue'
import login from "@/components/login";
import CoursePage from "@/components/CourseComponents/CoursePage";
import '@/assets/css/tailwind.css'

Vue.config.productionTip = false

const NotFoundComponent = { template: '<p>Page not found</p>' }
const HomeComponent = login
const AboutComponent = { template: '<p>About page</p>' }
const CourseComponent = CoursePage

const routes = {
  '/': HomeComponent,
  '/index': HomeComponent,
  '/login': HomeComponent,
  '/course': CourseComponent,
  '/about': AboutComponent
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
