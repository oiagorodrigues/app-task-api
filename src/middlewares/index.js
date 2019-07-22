'use strict'

const express = require('express');
const router = express.Router();

const TaskController = require('../controllers/TaskController')();

router.get(`/task`, TaskController.index);
router.get(`/task/:id`, TaskController.get);
router.post(`/task`, TaskController.store);
router.put(`/task/:id`, TaskController.put);
router.delete(`/task/:id`, TaskController.delete);

module.exports = router;
