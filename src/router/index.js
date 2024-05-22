import { createRouter, createWebHashHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import Clases from '../views/clases.vue';
import EditarClase from '../components/clases/EditarClase.vue';
import NewClase from '../components/clases/NewClase.vue';
import Reservas from '../views/reservas.vue';
import EditarReserva from '../components/reservas/EditarReserva.vue';
import NewReserva from '../components/reservas/NewReserva.vue';
import Instalaciones from '../views/instalaciones.vue';
import NewInstalacion from '../components/instalaciones/NewInstalacion.vue';
import EditarInstalacion from '../components/instalaciones/EditarInstalacion.vue';
import Clientes from '../views/clientes.vue';
import NewCliente from '../components/clientes/NewCliente.vue';
import EditarCliente from '../components/clientes/EditarCliente.vue';
import Entrenadores from '../views/entrenadores.vue';
import NewEntrenador from '../components/entrenadores/NewEntrenador.vue';
import EditarEntrenador from '../components/entrenadores/EditarEntrenador.vue';

const routes = [
    {
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
        path: '/instalaciones',
        name: 'Instalaciones',
        component: Instalaciones
    },
    {
        path: '/editar-instalacion/:id',
        name: 'EditarInstalacion',
        component: EditarInstalacion
    },
    {
        path: '/add-instalaciones/',
        name: 'NewInstalacion',
        component: NewInstalacion
    },

    {
        path: '/clientes',
        name: 'Clientes',
        component: Clientes
    },
    {
        path: '/editar-cliente/:id',
        name: 'EditarCliente',
        component: EditarCliente
    },
    {
        path: '/add-clientes/',
        name: 'NewCliente',
        component: NewCliente
    },

    {
        path: '/entrenadores',
        name: 'Entrenadores',
        component: Entrenadores
    },
    {
        path: '/add-entrenadores/',
        name: 'NewEntrenador',
        component: NewEntrenador
    },
    {
        path: '/editar-entrenador/:id',
        name: 'EditarEntrenador',
        component: EditarEntrenador
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