<template>
    <div class="container mt-3">
        <div class="row">
            <div class="col-12 text-center">
                <div class="alert alert-success" role="alert">
                    <h1 class="mb-0" style="color: green;">RESERVAS
                
                <button @click="newReserva()" class="btn btn-success mx-2">
                    <font-awesome-icon icon="plus" />
                </button>
            </h1>
            </div>
                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">instalacion</th>
                            <th scope="col">cliente</th>
                            <th scope="col">fecha_hora_inicio</th>
                            <th scope="col">fecha_hora_final</th>
                            <th scope="col">estado</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(reserva, index) in reservas" :key="index">
                            <td>{{ reserva.id }}</td>
                            <td>{{ reserva.instalaciones_nombre }}</td>
                            <td>{{ reserva.cliente_nombre }}</td>
                            <td>{{ reserva.fecha_hora_inicio }}</td>
                            <td>{{ reserva.fecha_hora_final }}</td>
                            <td>{{ reserva.estado }}</td>
                            <td>
                                <button @click="deleteReserva(reserva.id)" class="btn btn-succes mx-2">
                                    <font-awesome-icon icon="trash" />
                                </button>
                                <button @click="editReserva(reserva.id)" class="btn btn-succes mx-2">
                                    <font-awesome-icon icon="pencil" />
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
import Swal from 'sweetalert2'
export default {
    name: 'Reserva',
    data() {
        return {
            reservas: []
        }
    },
    methods: {
        deleteReserva(codigo) {
            Swal.fire({
                title: `Do you want to delete the Reserva with id ${codigo}?`,
                showCancelButton: true,
                confirmButtonText: `Delete`,
            }).then((result) => {
                /* Read more about isConfirmed, isDenied below*/
                if (result.isConfirmed) {
                    axios.delete(`http://127.0.0.1:8000/api/reservas/${codigo}`)
                        .then(response => {
                            if (response.data.success) {
                                // Recargar la página
                                window.location.reload()
                                Swal.fire('Deleted!!', '', 'success')
                                this.products = response.data.products
                            }
                        })
                }
            })
        },
        editReserva(id) {
            this.$router.push({ name: 'EditarReserva', params: { id: `${id}` } });
        },
        newReserva() {
            this.$router.push({ name: 'NewReserva' });
        }
    },
    mounted() {
        axios
            .get("http://127.0.0.1:8000/api/reservas")
            .then(response => (this.reservas = response.data.reservas))
    },
}
</script>