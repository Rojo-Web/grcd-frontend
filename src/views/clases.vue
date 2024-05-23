<template>
  <div class="container mt-3">
    <div class="row">
      <div class="col-12 text-center">
        <div class="alert alert-success" role="alert">
          <h1 class="mb-0" style="color: green">
            CLASES

            <button @click="newClase()" class="btn btn-success mx-2">
              <font-awesome-icon icon="plus" />
            </button>
          </h1>
        </div>
        <table class="table table-striped">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">nombre</th>
              <th scope="col">descripcion</th>
              <th scope="col">instalacion</th>
              <th scope="col">entrenador</th>
              <th scope="col">hora_inicio</th>
              <th scope="col">duracion</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(clase, index) in clases" :key="index">
              <td>{{ clase.id }}</td>
              <td>{{ clase.nombre }}</td>
              <td>{{ clase.descripcion }}</td>
              <td>{{ clase.instalaciones_nombre }}</td>
              <td>{{ clase.entrenadore_nombre }}</td>
              <td>{{ clase.hora_inicio }}</td>
              <td>{{ clase.duracion }}</td>
              <td>
                <button
                  @click="deleteClase(clase.id)"
                  class="btn btn-succes mx-2"
                >
                  <font-awesome-icon icon="trash" />
                </button>
                <button
                  @click="editClase(clase.id)"
                  class="btn btn-succes mx-2"
                >
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
import axios from "axios";
import Swal from "sweetalert2";
export default {
  name: "Clase",
  data() {
    return {
      clases: [],
    };
  },
  methods: {
    deleteClase(codigo) {
      Swal.fire({
        title: `Do you want to delete the Clase with id ${codigo}?`,
        showCancelButton: true,
        confirmButtonText: `Delete`,
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below*/
        if (result.isConfirmed) {
          axios
            .delete(`http://127.0.0.1:8000/api/clases/${codigo}`)
            .then((response) => {
              if (response.data.success) {
                // Recargar la página
                window.location.reload();
                Swal.fire("Deleted!!", "", "success");
                this.products = response.data.products;
              }
            });
        }
      });
    },
    editClase(id) {
      this.$router.push({ name: "EditarClase", params: { id: `${id}` } });
    },
    newClase() {
      this.$router.push({ name: "NewClase" });
    },
  },
  mounted() {
    axios
      .get("http://127.0.0.1:8000/api/clases")
      .then((response) => (this.clases = response.data.clases));
  },
};
</script>
