const Book = require('../models/Book.js');

const getBooks = async (req, res) => {
    try {
        const books = await Book.find();
        res.status(200).json(books);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

const getBook = async (req, res) => {
    const { id } = req.params;
    try {
        const book = await Book.findById(id);
        res.status(200).json(book);
    }
    catch (error) {
        res.status(404).json({ message: error.message });
    }
}

const createBook = async (req, res) => {
    const book = req.body;
    const newBook = new Book(book);
    try {
        await newBook.save();
        res.status(201).json(newBook);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

const updateBook = async (req, res) => {
    const { id } = req.params;
    const book = req.body;
    const updatedBook = await Book.findByIdAndUpdate(id, book, { new: true });
    res.json(updatedBook);
}

const deleteBook = async (req, res) => {
    const { id } = req.params;
    await Book.findByIdAndDelete(id);
    res.json({ message: 'Book deleted successfully' });
}

module.exports = { getBooks, getBook, createBook, updateBook, deleteBook };