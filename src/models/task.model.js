import mongoose from "mongoose";

const taskSchema = new mongoose.Schema(
  {
    nametask: {
      type: String,
      required: true, 
    },
    description: {
      type: String,
      required: true,
    },
    fecha: {
      type: Date,
      default: Date.now,
    },
    recordar: {
      type: Boolean,
      required: true,
    },
    estado: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    user: {
     type : mongoose.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Task", taskSchema);