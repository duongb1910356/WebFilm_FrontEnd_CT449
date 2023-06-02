import { createWebHistory, createRouter } from "vue-router";
import HomePage from "@/views/HomePage.vue";
import WatchPage from "@/views/WatchPage.vue";
import DetailPage from "@/views/DetailPage.vue";
import AdminPage from "@/views/AdminPage.vue";

const routes = [
    {
        path: "/",
        name: "homepage",
        component: HomePage,
    },

    {
        path: "/result",
        name: "result",
        component: DetailPage,
    },

    {
        path: "/watch/:slug",
        name: "watchpage",
        component: WatchPage,
        props: true,
    },

    {
        path: "/admin",
        name: "admin",
        component: AdminPage,
    },
];

const router = createRouter({ history: createWebHistory(import.meta.env.BASE_URL), routes, });
export default router;