<template>
    <br>
    <div class="container text-start">
      <h1 class="text-primary fw-bold text-center">Nuevo Entrenador</h1>
      <div class="container">
        <br>
        
        <form @submit.prevent="saveEntrenador">
          <div class="row mb-3">
            <div class="col-md-6">
              <label for="id" class="form-label">Id</label>
              <div class="input-group">
                <div class="input-group-text">
                  <font-awesome-icon icon="tag" />
                </div>
                <input type="text" class="form-control" id="id" name="id" placeholder="Id entrenador" disabled
                  v-model="entrenador.id" />
              </div>
            </div>
          </div>
          <div class="row mb-3">
            <div class="col-md-6">
              <label for="nombre" class="form-label">Nombre</label>
              <div class="input-group">
                <div class="input-group-text"><font-awesome-icon icon="user" /></div>
                <input type="text" class="form-control" id="nombre" name="nombre" placeholder="Nombre"
                  v-model="entrenador.nombre" />
              </div>
            </div>
            
          </div>

          <div class="row mb-3">
            <div class="col-md-6">
              <label for="apellido" class="form-label">Apellido</label>
              <div class="input-group">
                <div class="input-group-text">
                  <font-awesome-icon icon="user" />
                </div>
                <input type="text" class="form-control" id="apellido" name="apellido" placeholder="apellido"
                  v-model="entrenador.apellido" />
              </div>
            </div>

          </div>

            <div class="col-md-6">
              <label for="especialidad" class="form-label">Especialidad</label>
              <div class="input-group">
                <div class="input-group-text">
                  <font-awesome-icon icon="map-marker-alt" />
                </div>
                <input type="text" class="form-control" id="especialidad" name="especialidad" placeholder="Especialidad"
                  v-model="entrenador.especialidad" />
              </div>
            </div>     
          <br>
          <div class="row mb-3">
            <div class="col-md-12 text-start">
              <button type="submit" class="btn btn-primary me-2">Guardar</button>
              <button type="button" class="btn btn-secondary" @click="cancelar">Cancelar</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </template>
  
  
  
  <script>
  import axios from "axios";
  import Swal from "sweetalert2";
  
  export default {
    name: "NewEntrenador",
    data() {
      return {
        entrenador: {
          id: 0,
          nombre: "",
          apellido: "",
          especialidad: "",
        },
      };
    },
  
    methods: {
      cancelar() {
        this.$router.push({ name: "Entrenadores" });
      },
      async saveEntrenador() {
        
        const res = await axios.post(
          "http://127.0.0.1:8000/api/entrenadores/",
          this.entrenador
        );
        console.log(res);
        if (res.status === 200) {
          this.$router.push({ name: "Entrenadores" });
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Entrenadoresactualizado",
            showConfirmButton: false,
            timer: 2000,
          });
        }
      },
    },
    mounted() {},
  };
  </script> 