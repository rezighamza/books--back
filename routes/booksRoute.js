const router = require('express').Router();
const Book = require('../models/Book');
const { getBooks, getBook, createBook, updateBook, deleteBook } = require('../controllers/booksController');

router.get('/', getBooks);
router.get('/:id', getBook);
router.post('/', createBook);
router.put('/:id', updateBook);
router.delete('/:id', deleteBook);

module.exports = router;