<template>
  <br />
  <div class="container text-start">
    <h1 class="text-primary fw-bold text-center">Nueva Instalacion</h1>
    <div class="container">
      <br />

      <form @submit.prevent="updateInstalacion">
        <div class="row mb-3">
          <div class="col-md-6">
            <label for="id" class="form-label">Id</label>
            <div class="input-group">
              <div class="input-group-text">
                <font-awesome-icon icon="tag" />
              </div>
              <input type="text" class="form-control" id="id" name="id" placeholder="Id instalacion" disabled
                v-model="instalacion.id" />
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
                v-model="instalacion.nombre" />
            </div>
          </div>

          <div class="col-md-6">
            <label for="tipo" class="form-label">Tipo</label>
            <div class="input-group">
              <div class="input-group-text">
                <font-awesome-icon icon="building" />
              </div>
              <input type="text" class="form-control" id="tipo" name="tipo" placeholder="Tipo"
                v-model="instalacion.tipo" />
            </div>
          </div>
          
        </div>
        <div class="row mb-3">
          <div class="col-md-6">
            <label for="capacidad" class="form-label">Capacidad</label>
            <div class="input-group">
              <div class="input-group-text">
                <font-awesome-icon icon="chart-bar" />
              </div>
              <input type="number" class="form-control" id="capacidad" name="capacidad" placeholder="Capacidad"
                v-model="instalacion.capacidad" />
            </div>
          </div>
          <div class="col-md-6">
            <label for="disponibilidad" class="form-label">Disponibilidad</label>
            <div class="input-group">
              <div class="input-group-text">
                <font-awesome-icon icon="map-marker-alt" />
              </div>
              <input type="text" class="form-control" id="disponibilidad" name="disponibilidad"
                placeholder="Disponibilidad" v-model="instalacion.disponibilidad" />
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
  name: "EditarInstalacion",
  data() {
    return {
      instalacion: {
        id: 0,
        nombre: "",
        tipo: "",
        capacidad: 0,
        disponibilidad: "",
      },
    };
  },

  methods: {
  cancelar() {
    this.$router.push({ name: 'Instalaciones' }); // Cambiado de 'Instalacion' a 'Instalaciones'
  },

  async updateInstalacion() {
    try {
      const url = `http://127.0.0.1:8000/api/instalaciones/${this.instalacion.id}`;
      console.log("URL:", url);
      console.log("Data:", this.instalacion);

        const res = await axios.put(url, this.instalacion);
        if (res.status === 200) {
          this.$router.push({ name: 'Instalaciones' });
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Instalacion actualizado',
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

    this.instalacion.id = this.$route.params.id;
    console.log(this.instalacion.id);
    console.log(`http://127.0.0.1:8000/api/instalaciones/${this.instalacion.id}`);
    axios.get(`http://127.0.0.1:8000/api/instalaciones/${this.instalacion.id}`)
      .then((response) => {
        this.instalacion = response.data.instalacion;
      })
      .catch((error) => {
        console.error("Error al obtener el cliente:", error);
      });
  }
};
</script>