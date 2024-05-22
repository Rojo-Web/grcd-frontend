<template>
    <div class="container mt-3">
      <div class="row">
        <div class="col-12 text-center">
          <div class="alert alert-success" role="alert">
            <h1 class="mb-0" style="color: green">
              INSTALACIONES 
              <button @click="newInstalacion()" class="btn btn-success mx-2">
                <font-awesome-icon icon="plus" />
              </button>
            </h1>
          </div>
  
          <table class="table table-striped">
            <thead>
              <tr>
                <th scope="col">Id</th>
                <th scope="col">Nombre</th>
                <th scope="col">Tipo</th>
                <th scope="col">Capacidad</th>
                <th scope="col">Disponibilidad</th>
                <th scope="col">Acciones</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(instalacion, index) in instalaciones" :key="index">
                <th scope="row">{{ instalacion.id }}</th>
                <td>{{ instalacion.nombre }}</td>
                <td>{{ instalacion.tipo }}</td>
                <td>{{ instalacion.capacidad }}</td>
                <td>{{ instalacion.disponibilidad }}</td>
                <td>
                  <button @click="deleteInstalacion(instalacion.id)" class="btn btn-danger me-2">
                    <font-awesome-icon icon="trash" />
                  </button>
                  <button @click="editInstalacion(instalacion.id)" class="btn btn-warning">
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
  
    name: "Instalacion",
    data() {
      return {
        instalaciones: [],
      };
    },
  
    methods: {
      deleteInstalacion(codigo) {
        Swal.fire({
          title: 'Quieres borrar instalacion con el id ${codigo}?',
          showCancelButton: true,
          confirmButtonText: 'Delete',
        }).then((result) => {
  
          if (result.isConfirmed) {
            axios.delete(`http://127.0.0.1:8000/api/instalaciones/${codigo}`)
              .then((response) => { 
                if (response.data.success) {
                  window.location.reload();
                  Swal.fire('Deleted!!', '', 'success')
                  this.instalacion = response.data.instalacion
                }
              })
          }
        })
      },
  
      editInstalacion(id) {
        console.log(id)
        this.$router.push({ name: 'EditarInstalacion', params: { id: `${id}` } })
      },
      newInstalacion() {
        this.$router.push({ name: 'NewInstalacion' })
      }
    },
  
  
    mounted() {
      axios
        .get("http://127.0.0.1:8000/api/instalaciones")
        .then((response) => (this.instalaciones = response.data.instalaciones));
    },
  };
  
  </script>
  