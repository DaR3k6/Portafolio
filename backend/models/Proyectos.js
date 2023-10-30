const { Schema, model, default: mongoose } = require("mongoose");

const ProyectoSchema = Schema(
  {
    persona_id: { type: mongoose.Schema.Types.ObjectId, ref: "personal" },
    nombre: {
      type: String,
      require: true,
    },
    detalle: {
      type: String,
      require: true,
    },
    link: {
      type: String,
      require: true,
    },
  },
  { collection: "proyecto" }
);

module.exports = model("proyecto", ProyectoSchema, "proyecto");
