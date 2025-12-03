import express from 'express';
import {
    getNotes,
    getNoteId,
    createNote,
    updateNote,
    deleteNote
} from '../controllers/noteController.js'

const router = express.Router();

router.route('/').get(getNotes).post(createNote);
router.route('/:id').get(getNoteId).put(updateNote).delete(deleteNote);

export default router;