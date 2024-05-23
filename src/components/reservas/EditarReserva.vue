<template>
        <div class="container">
        <div class="col-12 text-center">
            <div class="alert alert-success" role="alert">
                <h1 class="mb-0" style="color: green;">Editar Reserva</h1>
            </div>
        </div>
        <p></p>
        <p></p>
        <form @submit.prevent="updateReserva">
            <div class="row justify-content-center align-items-center">
                <div class="col-md-4" style="margin-right: 435px;">
                    <div class="mb-3">
                        <label for="codigo" class="form-label">Id</label>
                        <div class="input-group">
                            <div class="input-group-text"><font-awesome-icon icon="tag" /></div>
                            <input type="text" class="form-control" id="id" aria-describedby="codigoHelp" name="id"
                                disabled="disabled" v-model='reserva.id'>
                        </div>
                        <!-- <div id="codigoHelp" class="form-text">Codigo</div> -->
                    </div>
                </div>
            </div>
            <div class="row justify-content-center align-items-center">
    <div class="col-md-4">
        <div class="mb-3">
            <label for="fecha_hora_inicio" class="form-label">Fecha de inicio</label>
            <div class="input-group">
                <div class="input-group-text"><font-awesome-icon icon="building" /></div>
                <input type="datetime-local" class="form-control" id="fecha_hora_inicio" aria-describedby="codigoHelp" name="fecha_hora_inicio" v-model='reserva.fecha_hora_inicio'>
            </div>
        </div>
    </div>
    <div class="col-md-4">
        <div class="mb-3">
            <label for="fecha_hora_final" class="form-label">Fecha de final</label>
            <div class="input-group">
                <div class="input-group-text"><font-awesome-icon icon="building" /></div>
                <input type="datetime-local" class="form-control" id="fecha_hora_final" aria-describedby="codigoHelp" name="fecha_hora_final" v-model='reserva.fecha_hora_final'>
            </div>
        </div>
    </div>
    <div class="w-100"></div> <!-- Break to next row -->
    <div class="col-md-4">
        <div class="mb-3">
            <label for="estado" class="form-label">Estado</label>
            <div class="input-group">
                <select class="form-select" v-model="reserva.estado">
                    <option value="" selected></option>
                    <option value="pendiente">pendiente</option>
                    <option value="confirmada">confirmada</option>
                    <option value="cancelada">cancelada</option>
                </select>
            </div>
        </div>
    </div>
    <div class="col-md-4">
        <div class="mb-3">
            <label for="instalacion_id" class="form-label">Instalacion</label>
            <div class="input-group">
                <select class="form-select" v-model="reserva.instalacion_id">
                    <option v-for="instalacion in instalaciones" v-bind:value="instalacion.id">{{ instalacion.nombre }}</option>
                </select>
            </div>
        </div>
    </div>
    <div class="w-100"></div> <!-- Break to next row -->
    <div class="col-md-4">
        <div class="mb-3">
            <label for="cliente_id" class="form-label">Cliente</label>
            <div class="input-group">
                <select class="form-select" v-model="reserva.cliente_id">
                    <option v-for="cliente in clientes" v-bind:value="cliente.id">{{ cliente.nombre }}</option>
                </select>
            </div>
        </div>
    </div>
</div>

            
                <button class="btn btn-primary" type="submit">Actualizar</button>
                <button class="btn btn-secondary mx-2" @click="cancelar">Cancelar</button>
        </form>
    </div>
</template>

<script>
import axios from 'axios'
import Swal from 'sweetalert2'
export default {
    name: 'EditarReserva',
    data() {
        return {
            reserva: {
                id: 0,
                instalacion_id: 0,
                cliente_id: 0,
                fecha_hora_inicio: '',
                fecha_hora_final: '',
                estado: '',
            }, instalaciones: [], clientes: []
        }
    },
    methods:{
        cancelar(){
            this.$router.push({name:'Reservas'})
        },
        async updateReserva(){
            const res = await axios.put(`http://127.0.0.1:8000/api/reservas/${this.reserva.id}`, this.reserva)
            if(res.status == 200){
                this.$router.push({name: 'Reservas'})
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Reserva has been updated',
                    showConfirmButton: false,
                    timer: 2000
                })
            }
        }
    },
    mounted() {
        this.reserva.id = this.$route.params.id;
        console.log(`http://127.0.0.1:8000/api/reservas/${this.reserva.id}`)
        axios
            .get(`http://127.0.0.1:8000/api/reservas/${this.reserva.id}`)
            .then(response => {this.reserva = response.data.reserva;this.clientes = response.data.clientes;this.instalaciones = response.data.instalaciones})
    },
}
</script>