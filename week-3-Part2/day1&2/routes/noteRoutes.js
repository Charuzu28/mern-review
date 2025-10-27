// import { getNotes,getNotesId } from '../controllers/noteControllers';
// import express, { Router } from 'express';
const {getNotes, getNotesId } = require('../controllers/noteControllers');
const express = require('express')

const router = express.Router();


router.get('/', getNotes);
router.get('/:id', getNotesId);

module.exports = router;