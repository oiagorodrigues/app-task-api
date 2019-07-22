const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema(
  {
    // _id: mongoose.Schema.Types.ObjectId,
    task: String,
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model('Task', TaskSchema)
