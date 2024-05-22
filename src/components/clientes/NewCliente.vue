<template>
    <br>
    <div class="container text-start">
      <h1 class="text-primary fw-bold text-center">Nuevo Cliente</h1>
      <div class="container">
        <br>
        
        <form @submit.prevent="saveCliente">
          <div class="row mb-3">
            <div class="col-md-6">
              <label for="id" class="form-label">Id</label>
              <div class="input-group">
                <div class="input-group-text">
                  <font-awesome-icon icon="tag" />
                </div>
                <input type="text" class="form-control" id="id" name="id" placeholder="Id cliente" disabled
                  v-model="clientes.id" />
              </div>
            </div>
          </div>
          <div class="row mb-3">
            <div class="col-md-6">
              <label for="nombre" class="form-label">Nombre</label>
              <div class="input-group">
                <div class="input-group-text"><font-awesome-icon icon="user" /></div>
                <input type="text" class="form-control" id="nombre" name="nombre" placeholder="Nombre"
                  v-model="clientes.nombre" />
              </div>
            </div>
            <div class="col-md-6">
              <label for="apellido" class="form-label">Apellido</label>
              <div class="input-group">
                <div class="input-group-text">
                  <font-awesome-icon icon="building" />
                </div>
                <input type="text" class="form-control" id="apellido" name="apellido" placeholder="apellido"
                  v-model="clientes.apellido" />
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
                  v-model="clientes.telefono" />
              </div>
            </div>
            <div class="col-md-6">
              <label for="email" class="form-label">Correo</label>
              <div class="input-group">
                <div class="input-group-text">
                  <font-awesome-icon icon="map-marker-alt" />
                </div>
                <input type="email" class="form-control" id="email" name="email" placeholder="email"
                  v-model="clientes.email" />
              </div>
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
    name: "NewCliente",
    data() {
      return {
        clientes: {
          id: 0,
          nombre: "",
          apellido: "",
          telefono: "",
          email: "",
        },
      };
    },
  
    methods: {
      cancelar() {
        this.$router.push({ name: "Clientes" });
      },
      async saveCliente() {
        console.log(
          "ID: " +
          this.clientes.id +
          "\n" +
          this.clientes.nombre +
          "\nName: " +
          this.clientes.apellido +
          "\n" +
          this.clientes.telefono +
          "\n" +
          this.clientes.email
  
        );
        const res = await axios.post(
          "http://127.0.0.1:8000/api/clientes/",
          this.clientes
        );
        console.log(res);
        if (res.status === 200) {
          this.$router.push({ name: "Clientes" });
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Clientesactualizado",
            showConfirmButton: false,
            timer: 2000,
          });
        }
      },
    },
    mounted() {},
  };
  </script>