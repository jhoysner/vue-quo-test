import Vue from "vue";
import VueRouter from "vue-router";
import NotFound from "../components/NotFound.vue";
// import store from "../store";

Vue.use(VueRouter);

const routes = [
  {
    path: "/weather",
    name: "weather",
    component: () =>
      import(/* webpackChunkName: "Weather" */ "../views/Weather.vue"),
    alias: "/"
  },
  {
    path: "/favorites",
    name: "favorites",
    component: () =>
      import(/* webpackChunkName: "Favorite" */ "../views/Favorite.vue")
  },
 
  { path: "*", component: NotFound }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  linkExactActiveClass: "escuela-vue-exact",
  linkActiveClass: "escuela-vue-active",
  routes,
 
});



export default router;