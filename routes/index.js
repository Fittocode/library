const express = require('express');
const router = express.Router();
const Book = require('../models/Book.model');
const mongoose = require('mongoose');

const DB_NAME = 'library-project';

mongoose.connect(`mongodb://localhost/${DB_NAME}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

router.get('/', (req, res) => {
  res.send('Hello World');
});

router.get('/books', async (req, res) => {
  const books = await Book.find();
  try {
    res.render('books-list', { books: books });
  } catch (err) {
    console.log(err.message);
  }
});

router.get('/books/:bookId', async (req, res) => {
  const { bookId } = req.params;
  const book = await Book.findById(bookId);
  try {
    res.render('book-details', { book: book });
  } catch (err) {
    console.log(err.message);
  }
});

module.exports = router;
