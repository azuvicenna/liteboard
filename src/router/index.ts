import { createRouter, createWebHistory } from "vue-router";
import SystemLayout from "@/common/layouts/SystemLayout.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: SystemLayout,
      children: [
        {
          path: "",
          name: "home",
          component: () => import("@/views/HomeView.vue"),
        },
      ],
    },
  ],
});

export default router;
