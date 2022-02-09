import Home from './Home.vue'

const Home = { template: '<div>Home</div>' }

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    
];

const router = VueRouter.createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: VueRouter.createWebHashHistory(),
    routes, // short for `routes: routes`
});

const app = Vue.createApp({});

app.use(router);

app.mount('#app');