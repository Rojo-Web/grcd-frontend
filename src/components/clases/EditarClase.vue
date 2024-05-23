<template>
        <div class="container">
        <div class="col-12 text-center">
            <div class="alert alert-success" role="alert">
                <h1 class="mb-0" style="color: green;">Editar Clase</h1>
            </div>
        </div>
        <p></p>
        <p></p>
        <form @submit.prevent="updateClase">
            <div class="row justify-content-center align-items-center">
                <div class="col-md-4" style="margin-right: 435px;">
                    <div class="mb-3">
                        <label for="codigo" class="form-label">Id</label>
                        <div class="input-group">
                            <div class="input-group-text"><font-awesome-icon icon="tag" /></div>
                            <input type="text" class="form-control" id="id" aria-describedby="codigoHelp" name="id"
                                disabled="disabled" v-model='clase.id'>
                        </div>
                        <!-- <div id="codigoHelp" class="form-text">Codigo</div> -->
                    </div>
                </div>
            </div>
            <div class="row justify-content-center align-items-center">
    <div class="col-md-4">
        <div class="mb-3">
            <label for="nombre" class="form-label">Nombre</label>
            <div class="input-group">
                <div class="input-group-text"><font-awesome-icon icon="building" /></div>
                <input type="text" class="form-control" id="nombre" aria-describedby="codigoHelp" name="nombre" v-model='clase.nombre'>
            </div>
        </div>
    </div>
    <div class="col-md-4">
        <div class="mb-3">
            <label for="descripcion" class="form-label">Descripcion</label>
            <div class="input-group">
                <div class="input-group-text"><font-awesome-icon icon="building" /></div>
                <input type="text" class="form-control" id="descripcion" aria-describedby="codigoHelp" name="descripcion" v-model='clase.descripcion'>
            </div>
        </div>
    </div>
    <div class="w-100"></div> <!-- Break to next row -->
    <div class="col-md-4">
        <div class="mb-3">
            <label for="hora_inicio" class="form-label">Hora de inicio</label>
            <div class="input-group">
                <div class="input-group-text"><font-awesome-icon icon="building" /></div>
                <input type="datetime-local" class="form-control" id="hora_inicio" aria-describedby="codigoHelp" name="hora_inicio" v-model='clase.hora_inicio'>
            </div>
        </div>
    </div>
    <div class="col-md-4">
        <div class="mb-3">
            <label for="duracion" class="form-label">Duracion</label>
            <div class="input-group">
                <div class="input-group-text"><font-awesome-icon icon="bank" /></div>
                <input type="number" class="form-control" id="duracion" aria-describedby="codigoHelp" name="duracion" v-model='clase.duracion'>
            </div>
        </div>
    </div>
    <div class="w-100"></div> <!-- Break to next row -->
    <div class="col-md-4">
        <div class="mb-3">
            <label for="instalacion" class="form-label">Instalacion</label>
            <div class="input-group">
                <select class="form-select" v-model="clase.instalacion_id">
                    <option v-for="instalacion in instalaciones" v-bind:value="instalacion.id">{{ instalacion.nombre }}</option>
                </select>
            </div>
        </div>
    </div>
    <div class="col-md-4">
        <div class="mb-3">
            <label for="entrenador" class="form-label">Entrenador</label>
            <div class="input-group">
                <select class="form-select" v-model="clase.entrenador_id">
                    <option v-for="entrenador in entrenadores" v-bind:value="entrenador.id">{{ entrenador.nombre }}</option>
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
    name: 'EditarClase',
    data() {
        return {
            clase: {
                id: 0,
                nombre: '',
                descripcion: '',
                instalacion_id: 0,
                entrenador_id: 0,
                hora_inicio: '',
                duracion: 0,
            }, instalaciones: [], entrenadores: []
        }
    },
    methods:{
        cancelar(){
            this.$router.push({name:'Clases'})
        },
        async updateClase(){
            const res = await axios.put(`http://127.0.0.1:8000/api/clases/${this.clase.id}`, this.clase)
            if(res.status == 200){
                this.$router.push({name: 'Clases'})
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Clase has been updated',
                    showConfirmButton: false,
                    timer: 2000
                })
            }
        }
    },
    mounted() {
        this.clase.id = this.$route.params.id;
        console.log(`http://127.0.0.1:8000/api/clases/${this.clase.id}`)
        axios
            .get(`http://127.0.0.1:8000/api/clases/${this.clase.id}`)
            .then(response => {this.clase = response.data.clase;this.entrenadores = response.data.entrenadores;this.instalaciones = response.data.instalaciones})
    },
}
</script>