import Task from "../models/task.model.js";

export const getTasks = async (req, res) => {
  try {
    const tasks = await Task.find({ user : req.user.id }).populate("user");
    res.json(tasks);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const createTask = async (req, res) => {
  try {
    const { nametask, description, fecha, recordar, estado, category } = req.body;
    const newTask = new Task({
      nametask,
      description,
      fecha,
      recordar,
      estado,
      category,
      user: req.user.id,
    });
    await newTask.save();
    res.json(newTask);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

