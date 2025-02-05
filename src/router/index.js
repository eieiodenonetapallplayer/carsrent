import { createRouter, createWebHistory } from "vue-router";
import NotFound from "../components/NotFound.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "Home",
      component: () => import("../App.vue"),
      children: [
        {
          path: "gallery",
          name: "Gallery",
          component: () => import("../components/Showgallery.vue"),
        },
        {
          path: "contact",
          name: "Contact",
          component: () => import("../components/Contact.vue"),
        },
        {
          path: "about",
          name: "About",
          component: () => import("../components/AboutUs.vue"),
        },
        {
          path: "/:pathMatch(.*)*",
          name: "NotFound",
          component: NotFound,
        },
      ],
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: "smooth",
      };
    }
    return savedPosition || { top: 0 };
  },
});

export default router;
