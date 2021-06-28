"use strict";
const dbConn = require("../config/db.config");

// Todo object create
var Todo = function (todo) {
  this.title = todo.title;
  this.description = todo.description;
  this.created_at = new Date();
  this.updated_at = new Date();
};

// Todo creation
Todo.create = function (newTodo, result) {
  dbConn.query("INSERT INTO todos set ?", newTodo, function (err, res) {
    if (err) {
      result(err, null);
    } else {
      result(null, res.insertId);
    }
  });
};

// Get todo by ID
Todo.findById = function (id, result) {
  dbConn.query("Select * from todos where id = ? ", id, function (err, res) {
    if (err) result(err, null);
    else if (res.length > 0) result(null, res[0]);
    else result("Todo not found", null);
  });
};

// Get all todos
Todo.findAll = function (result) {
  dbConn.query("Select * from todos", function (err, res) {
    if (err) {
      result(null, err);
    } else {
      result(null, res);
    }
  });
};

// Update todo by ID
Todo.update = function (id, todo, result) {
  dbConn.query(
    "UPDATE todos SET title=?,description=? WHERE id = ?",
    [todo.title, todo.description, id],
    function (err, res) {
      if (err) {
        result(null, err);
      } else {
        result(null, res);
      }
    }
  );
};

// Delete todo
Todo.delete = function (id, result) {
  dbConn.query("DELETE FROM todos WHERE id = ?", [id], function (err, res) {
    if (err) {
      result(null, err);
    } else {
      result(null, res);
    }
  });
};

module.exports = Todo;
