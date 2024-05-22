<template>
    <div class="container mt-3">
      <div class="row">
        <div class="col-12 text-center">
          <div class="alert alert-success" role="alert">
            <h1 class="mb-0" style="color: green">
              CLIENTES 
              <button @click="newCliente()" class="btn btn-success mx-2">
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
                <th scope="col">Telefono</th>
                <th scope="col">Correo</th>
                <th scope="col">Acciones</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(cliente, index) in clientes" :key="index">
                <th scope="row">{{ cliente.id }}</th>
                <td>{{ cliente.nombre }}</td>
                <td>{{ cliente.apellido }}</td>
                <td>{{ cliente.telefono }}</td>
                <td>{{ cliente.email }}</td>
                <td>
                  <button @click="deleteCliente(cliente.id)" class="btn btn-danger me-2">
                    <font-awesome-icon icon="trash" />
                  </button>
                  <button @click="editCliente(cliente.id)" class="btn btn-warning">
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
  
    name: "Cliente",
    data() {
      return {
        clientes: [],
      };
    },
  
    methods: {
      deleteCliente(codigo) {
        Swal.fire({
          title: 'Quieres borrar cliente con el id ${codigo}?',
          showCancelButton: true,
          confirmButtonText: 'Delete',
        }).then((result) => {
  
          if (result.isConfirmed) {
            axios.delete(`http://127.0.0.1:8000/api/clientes/${codigo}`)
              .then((response) => { 
                if (response.data.success) {
                  window.location.reload();
                  Swal.fire('Deleted!!', '', 'success')
                  this.cliente = response.data.cliente
                }
              })
          }
        })
      },
  
      editCliente(id) {
        console.log(id)
        this.$router.push({ name: 'EditarCliente', params: { id: `${id}` } })
      },
      newCliente() {
        this.$router.push({ name: 'NewCliente' })
      }
    },
  
  
    mounted() {
      axios
        .get("http://127.0.0.1:8000/api/clientes")
        .then((response) => (this.clientes = response.data.clientes));
    },
  };
  
  </script>
  