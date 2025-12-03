const express = require('express');
const router = express.Router();
const { getNotes, addNote, updateNote, DeleteNote, deleteNote } = require('../controller/notesController');

router.get('/', getNotes);
router.post('/', addNote);
router.put('/:id', updateNote);
router.delete('/:id', deleteNote);

module.exports = router;