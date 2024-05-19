import { createRouter, createWebHashHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import Clases from '../views/clases.vue';
import EditarClase from '../components/clases/EditarClase.vue';
import NewClase from '../components/clases/NewClase.vue';
import Reservas from '../views/reservas.vue';
import EditarReserva from '../components/reservas/EditarReserva.vue';
import NewReserva from '../components/reservas/NewReserva.vue';

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
        path: '/reservas',
        name: 'Reservas',
        component: Reservas
    },
    {
        path: '/editar-reserva/:id',
        name: 'EditarReserva',
        component: EditarReserva
    },
    {
        path: '/add-reservas/',
        name: 'NewReserva',
        component: NewReserva
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