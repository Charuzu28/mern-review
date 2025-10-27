const express = require('express');
const { getNotes, getNotesId, updateNote, createNote, deleteNote } = require('../controllers/noteControllers');

const router = express.Router();

router.route('/').get(getNotes).post(createNote);
router.route('/:id').get(getNotesId).put(updateNote).delete(deleteNote);

module.exports = router;