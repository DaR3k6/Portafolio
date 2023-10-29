const { Schema, model, default: mongoose } = require("mongoose");

const EstudiosSchema = Schema(
  {
    persona_id: { type: mongoose.Schema.Types.ObjectId, ref: "personal" },
    detalle: {
      type: String,
      require: true,
    },
    fechaFin: {
      type: Date,
      default: Date.now,
    },
    notas: {
      type: Number,
      required: true,
    },
  },
  {
    collection: "estudios",
  }
);

module.exports = model("estudios", EstudiosSchema, "estudios");
