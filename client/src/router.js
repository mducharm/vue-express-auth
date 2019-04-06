import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import HelloWorld from "./components/HelloWorld.vue";
import Login from "./components/Login.vue";
import Dashboard from "./components/Dashboard.vue";

Vue.use(Router);

export default new Router({
  routes: [
    // {
    //   path: "/",
    //   name: "HelloWorld",
    //   component: HelloWorld
    // },
    {
      path: "/",
      name: "Login",
      component: Login
    },
    {
      path: "/dashboard",
      name: "Dashboard",
      component: Dashboard
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    }
  ]
});
