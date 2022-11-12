import { createWebHistory, createRouter } from "vue-router";
import HomePage from "@/views/HomePage.vue";
import WatchPage from "@/views/WatchPage.vue"
const routes = [
    {
        path: "/",
        name: "homepage",
        component: HomePage,
    },
    {
        path: "/watch/:slug",
        name: "watchpage",
        component: WatchPage,
        props: true,
    }
];

const router = createRouter({ history: createWebHistory(import.meta.env.BASE_URL), routes, }); export default router;