var express = require('express');
var router  = express.Router();
var db = require('../models');
var mongoose = require('mongoose');
var helpers = require("../helper/todos");


router.route('/')
    .get(helpers.getTodos)
    .post(helpers.createTodo)
    
    
router.route('/:todoId')
    .get(helpers.getTodo)
    .put(helpers.updateTodo)
    .delete(helpers.deleteTodo)


module.exports = router;