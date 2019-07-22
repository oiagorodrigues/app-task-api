const model = require('../models/Task');
const GenericController = require('./GenericController');

module.exports = () => new GenericController(model);
