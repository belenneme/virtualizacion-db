const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const categoriaSchema = new Schema({
  nombre: {
    type: String,
    required: [true, "El nombre del contenedor es necesario"]
  },
  cpu: {
    type: String,
    required: [true, "La categoria de CPU es necesaria"]
  },
  memoria: {
    type: String,
    required: [true, "La categoria de memoria es necesaria"]
  },
  almacenamiento: {
    type: String,
    required: [true, "La categoria de almacenamiento es necesaria"]
  },
  estado: {
    type: Boolean,
    default: true,
  },
  created_at: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("Categoria", categoriaSchema);
