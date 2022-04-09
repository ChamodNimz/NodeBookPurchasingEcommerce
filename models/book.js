const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcryptjs");
const functions = require("../utilities/helperFunctions");
const validation = require("../utilities/helperFunctions");
const config = require("../config");

// Create Admin Schema
const BookSchema = new Schema({
  bookName: {
    type: String,
    required: true,
    validate: {
      validator: (v) => {
        return validation.isValidBookName(v);
      },
      message: "Enter a valid book name",
    },
  },
  author: {
    name: {
      type: String,
      required: true,
      validate: {
        validator: (v) => {
          return validation.isValidBookName(v);
        },
        message: "Enter a valid author name",
      },
    },
  },
  noPages: {
    type: Number,
    required: true,
  },
});

const Book = (module.exports = mongoose.model("book", BookSchema, "book"));

/**
 *  Insert a book
 *
 */
module.exports.insertBook = (body, callback) => {
  let book = new Book({
    bookName: body.bookName,
    author: body.author,
    noPages: body.noPages,
  });

  book.save(callback);
};

/**
 *  update a book
 *
 */
module.exports.updateBook = (body, callback) => {
    Book.findById(body.id, (err, book) => {
        if (!err) {
        console.log(book);
      book.bookName = body.bookName;
      book.author = body.author;
      book.noPages = body.noPages;

      book.save(callback);
    } else {
      callback(err, null);
      throw err;
    }
  });
};

/**
 * get all book details
 */
module.exports.getAllBookDetails = (callback) => {
  Book.find({}, callback);
};

/**
 * get book by id
 */
module.exports.getBookById = (id, callback) => {
  Book.findById(id, callback);
};

/**
 *  Delete a book 
 * 
 */
 module.exports.removeBook = (id,callback)=>{
    Book.findByIdAndDelete(id,callback);
}
