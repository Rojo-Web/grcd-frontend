<template>
    <br />
    <div class="container text-start">
      <h1 class="text-primary fw-bold text-center">Editar Cliente</h1>
      <div class="container">
        <br />
  
        <form @submit.prevent="updateCliente">
          <div class="row mb-3">
            <div class="col-md-6">
              <label for="id" class="form-label">Id</label>
              <div class="input-group">
                <div class="input-group-text">
                  <font-awesome-icon icon="tag" />
                </div>
                <input type="text" class="form-control" id="id" name="id" placeholder="Id cliente" disabled
                  v-model="cliente.id" />
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
                  v-model="cliente.nombre" />
              </div>
            </div>
  
            <div class="col-md-6">
              <label for="apellido" class="form-label">Apellido</label>
              <div class="input-group">
                <div class="input-group-text">
                  <font-awesome-icon icon="building" />
                </div>
                <input type="text" class="form-control" id="apellido" name="apellido" placeholder="apellido"
                  v-model="cliente.apellido" />
              </div>
            </div>
            
          </div>
          <div class="row mb-3">
            <div class="col-md-6">
              <label for="telefono" class="form-label">Telefono</label>
              <div class="input-group">
                <div class="input-group-text">
                  <font-awesome-icon icon="chart-bar" />
                </div>
                <input type="number" class="form-control" id="telefono" name="telefono" placeholder="telefono"
                  v-model="cliente.telefono" />
              </div>
            </div>
            <div class="col-md-6">
              <label for="email" class="form-label">Correo</label>
              <div class="input-group">
                <div class="input-group-text">
                  <font-awesome-icon icon="map-marker-alt" />
                </div>
                <input type="text" class="form-control" id="email" name="email"
                  placeholder="email" v-model="cliente.email" />
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
    name: "EditarCliente",
    data() {
      return {
        cliente: {
          id: 0,
          nombre: "",
          apellido: "",
          telefono: 0,
          email: "",
        },
      };
    },
  
    methods: {
    cancelar() {
      this.$router.push({ name: 'Clientes' }); // Cambiado de 'Cliente' a 'Clientes'
    },
  
    async updateCliente() {
      try {
        const url = `http://127.0.0.1:8000/api/clientes/${this.cliente.id}`;
        console.log("URL:", url);
        console.log("Data:", this.cliente);
  
          const res = await axios.put(url, this.cliente);
          if (res.status === 200) {
            this.$router.push({ name: 'Clientes' });
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'Cliente actualizado',
              showConfirmButton: false,
              timer: 2000
            });
          }
        } catch (error) {
          console.error("Error al actualizar el cliente:", error.response);
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: `No se pudo actualizar el cliente: ${error.response?.data?.message || error.message}`
          });
        }
      }
    },
  
    mounted() {
      console.log(this.$route.params.id);
  
      this.cliente.id = this.$route.params.id;
      console.log(this.cliente.id);
      console.log(`http://127.0.0.1:8000/api/clientes/${this.cliente.id}`);
      axios.get(`http://127.0.0.1:8000/api/clientes/${this.cliente.id}`)
        .then((response) => {
          this.cliente = response.data.cliente;
        })
        .catch((error) => {
          console.error("Error al obtener el cliente:", error);
        });
    }
  };
  </script>