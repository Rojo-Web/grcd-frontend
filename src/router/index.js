import { createRouter, createWebHashHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import Clases from '../views/clases.vue';
import EditarClase from '../components/clases/EditarClase.vue';
import NewClase from '../components/clases/NewClase.vue';

const routes = [{
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/clases',
        name: 'Clases',
        component: Clases
    },
    {
        path: '/editar-clase/:id',
        name: 'EditarClase',
        component: EditarClase
    },
    {
        path: '/add-clases/',
        name: 'NewClase',
        component: NewClase
    },
    {
        path: '/about',
        name: 'about',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/AboutView.vue')
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router