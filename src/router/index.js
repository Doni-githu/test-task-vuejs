import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("../views/HomeView.vue"),
  },
  {
    path: "/update/:id",
    name: 'edit',
    component: () => import("../views/EditView.vue")
  },
  {
    path: '/add',
    name: 'add',
    component: () => import("../views/AddView.vue")
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
