const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema(
  {
    task: {
      type: String,
      require: true
    },
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model('Task', TaskSchema)
