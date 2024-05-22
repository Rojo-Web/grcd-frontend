<template>
    <div class="container mt-3">
      <div class="row">
        <div class="col-12 text-center">
          <div class="alert alert-success" role="alert">
            <h1 class="mb-0" style="color: green">
              ENTRENADORES 
              <button @click="newEntrenador()" class="btn btn-success mx-2">
                <font-awesome-icon icon="plus" />
              </button>
            </h1>
          </div>
  
          <table class="table table-striped">
            <thead>
              <tr>
                <th scope="col">Id</th>
                <th scope="col">Nombre</th>
                <th scope="col">Apellido</th>
                <th scope="col">Especialidad</th>
                <th scope="col">Acciones</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(entrenador, index) in entrenadores" :key="index">
                <th scope="row">{{ entrenador.id }}</th>
                <td>{{ entrenador.nombre }}</td>
                <td>{{ entrenador.apellido }}</td>
                <td>{{ entrenador.especialidad }}</td>
                <td>
                  <button @click="deleteEntrenador(entrenador.id)" class="btn btn-danger me-2">
                    <font-awesome-icon icon="trash" />
                  </button>
                  <button @click="editEntrenador(entrenador.id)" class="btn btn-warning">
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
  import axios from 'axios';
  import Swal from 'sweetalert2';
  
  export default {
  
    name: "Entrenador",
    data() {
      return {
        entrenadores: [],
      };
    },
  
    methods: {
      deleteEntrenador(codigo) {
        Swal.fire({
          title: 'Quieres borrar entrenador con el id ${codigo}?',
          showCancelButton: true,
          confirmButtonText: 'Delete',
        }).then((result) => {
  
          if (result.isConfirmed) {
            axios.delete(`http://127.0.0.1:8000/api/entrenadores/${codigo}`)
              .then((response) => { 
                if (response.data.success) {
                  window.location.reload();
                  Swal.fire('Deleted!!', '', 'success')
                  this.entrenador = response.data.entrenador
                }
              })
          }
        })
      },
  
      editEntrenador(id) {
        console.log(id)
        this.$router.push({ name: 'EditarEntrenador', params: { id: `${id}` } })
      },
      newEntrenador() {
        this.$router.push({ name: 'NewEntrenador' })
      }
    },
  
  
    mounted() {
      axios
        .get("http://127.0.0.1:8000/api/entrenadores")
        .then((response) => (this.entrenadores = response.data.entrenadores));
    },
  };
  
<<<<<<< HEAD
  </script> 
=======
  </script>
>>>>>>> sebastianV
  