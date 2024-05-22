<template>
  <br>
  <div class="container text-start">
    <h1 class="text-primary fw-bold text-center">Nueva Instalacion</h1>
    <div class="container">
      <br>
      
      <form @submit.prevent="saveInstalacion">
        <div class="row mb-3">
          <div class="col-md-6">
            <label for="id" class="form-label">Id</label>
            <div class="input-group">
              <div class="input-group-text">
                <font-awesome-icon icon="tag" />
              </div>
              <input type="text" class="form-control" id="id" name="id" placeholder="Id instalacion" disabled
                v-model="instalaciones.id" />
            </div>
          </div>
        </div>
        <div class="row mb-3">
          <div class="col-md-6">
            <label for="nombre" class="form-label">Nombre</label>
            <div class="input-group">
              <div class="input-group-text"><font-awesome-icon icon="user" /></div>
              <input type="text" class="form-control" id="nombre" name="nombre" placeholder="Nombre"
                v-model="instalaciones.nombre" />
            </div>
          </div>
          <div class="col-md-6">
            <label for="tipo" class="form-label">Tipo</label>
            <div class="input-group">
              <div class="input-group-text">
                <font-awesome-icon icon="building" />
              </div>
              <input type="text" class="form-control" id="tipo" name="tipo" placeholder="Tipo"
                v-model="instalaciones.tipo" />
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
                v-model="instalaciones.capacidad" />
            </div>
          </div>
          <div class="col-md-6">
            <label for="disponibilidad" class="form-label">Disponibilidad</label>
            <div class="input-group">
              <div class="input-group-text">
                <font-awesome-icon icon="map-marker-alt" />
              </div>
              <input type="text" class="form-control" id="disponibilidad" name="disponibilidad" placeholder="Disponibilidad"
                v-model="instalaciones.disponibilidad" />
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
  name: "NewInstalacion",
  data() {
    return {
      instalaciones: {
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
      this.$router.push({ name: "Instalaciones" });
    },
    async saveInstalacion() {
      console.log(
        "ID: " +
        this.instalaciones.id +
        "\n" +
        this.instalaciones.nombre +
        "\nName: " +
        this.instalaciones.tipo +
        "\n" +
        this.instalaciones.capacidad +
        "\n" +
        this.instalaciones.disponibilidad

      );
      const res = await axios.post(
        "http://127.0.0.1:8000/api/instalaciones/",
        this.instalaciones
      );
      console.log(res);
      if (res.status === 200) {
        this.$router.push({ name: "Instalaciones" });
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Instalaciones actualizado",
          showConfirmButton: false,
          timer: 2000,
        });
      }
    },
  },
  mounted() {},
};
</script>