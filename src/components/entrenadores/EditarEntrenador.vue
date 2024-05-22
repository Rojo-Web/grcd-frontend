<template>
    <br />
    <div class="container text-start">
      <h1 class="text-primary fw-bold text-center">Editar Entrenador</h1>
      <div class="container">
        <br />
  
        <form @submit.prevent="updateEntrenador">
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
                <div class="input-group-text">
                  <font-awesome-icon icon="user" />
                </div>
                <input type="text" class="form-control" id="nombre" name="nombre" placeholder="Nombre"
                  v-model="entrenador.nombre" />
              </div>
            </div>

          <div class="row mb-3">
            <div class="col-md-6">
                <br>
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

          </div>

          <div class="row mb-3">
        
            <div class="col-md-6">
              <label for="especialidad" class="form-label">Especialidad</label>
              <div class="input-group">
                <div class="input-group-text">
                  <font-awesome-icon icon="map-marker-alt" />
                </div>
                <input type="text" class="form-control" id="especialidad" name="especialidad"
                  placeholder="Especialidad" v-model="entrenador.especialidad" />
              </div>
            </div>
          </div>
          <br />
          <div class="row mb-3">
            <div class="col-md-12 text-start">
              <button class="btn btn-primary" type="submit">Actualizar</button>
              <button class="btn btn-secondary mx-2" @click="cancelar">
                Cancelar
              </button>
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
    name: "EditarEntrenador",
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
      this.$router.push({ name: 'Entrenadores' }); // Cambiado de 'Entrenador' a 'Entrenadores'
    },
  
    async updateEntrenador() {
      try {
        const url = `http://127.0.0.1:8000/api/entrenadores/${this.entrenador.id}`;
        console.log("URL:", url);
        console.log("Data:", this.entrenador);
  
          const res = await axios.put(url, this.entrenador);
          if (res.status === 200) {
            this.$router.push({ name: 'Entrenadores' });
            Swal.fire({
              position: 'center',
              icon: 'success',
              title: 'Entrenador actualizado',
              showConfirmButton: false,
              timer: 2000
            });
          }
        } catch (error) {
          console.error("Error al actualizar el entrenador:", error.response);
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: `No se pudo actualizar el entrenador: ${error.response?.data?.message || error.message}`
          });
        }
      }
    },
  
    mounted() {
      console.log(this.$route.params.id);
  
      this.entrenador.id = this.$route.params.id;
      console.log(this.entrenador.id);
      console.log(`http://127.0.0.1:8000/api/entrenadores/${this.entrenador.id}`);
      axios.get(`http://127.0.0.1:8000/api/entrenadores/${this.entrenador.id}`)
        .then((response) => {
          this.entrenador = response.data.entrenador;
        })
        .catch((error) => {
          console.error("Error al obtener el entrenador:", error);
        });
    }
  };
<<<<<<< HEAD
  </script>  
======= 
  </script> 
>>>>>>> sebastianV
