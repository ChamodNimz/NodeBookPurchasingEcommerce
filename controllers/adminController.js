// import relavant models
const User = require("../models/user");
const Book = require("../models/book");

// authenticate
const createCustomer = (req, res) => {
  User.createCustomer(req.body, (err, data) => {
    if (!err) {
      res.send({
        success: true,
        message: "Successfully created...",
        data: data,
      });
    } else {
      console.log(err);
      res
        .status(500)
        .send({ success: false, message: "InternalExeptionOccured" });
    }
  });
};

const getAllCustomers = (req, res) => {
  User.getAllCustomers((err, data) => {
    if (!err) {
      res.send(data);
    } else {
      res.send({ success: false, error: "ExceptionOccured" });
      throw err;
    }
  });
};

const getAllBookDetails = (req, res) => {
  Book.getAllBookDetails((err, data) => {
    if (!err) {
      res.send(data);
    } else {
      res.send({ success: false, error: "ExceptionOccured" });
      throw err;
    }
  });
};

const insertBook = (req, res) => {
  Book.insertBook(req.body, (err, data) => {
    if (!err) {
      res.send({
        success: true,
        message: "Successfully created...",
        data: data,
      });
    } else {
      console.log(err);
      res
        .status(500)
        .send({ success: false, message: "InternalExeptionOccured" });
    }
  });
};

const getBookStats = (req, res) => {
  Book.getAllBookDetails((err, data) => {
    if (!err) {
      res.send(data);
    } else {
      res.send({ success: false, error: "ExceptionOccured" });
      throw err;
    }
  });
};

const updateBook = (req, res) => {
  Book.updateBook(req.body, (err, data) => {
    if (!err) {
      res.send({
        success: true,
        message: "Successfully updated...",
        data: data,
      });
    } else {
      console.log(err);
      res
        .status(500)
        .send({ success: false, message: "InternalExeptionOccured" });
    }
  });
};

const removeBook = (req, res) => {
  Book.removeBook(req.body.id,(err, data) => {
    if (!err) {
      res.send(data);
    } else {
      res.send({ success: false, error: "ExceptionOccured" });
      throw err;
    }
  });
};

module.exports = {
  updateBook,
  createCustomer,
  getAllCustomers,
  insertBook,
  getAllBookDetails,
  getBookStats,
  removeBook
};
