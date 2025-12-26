import express, { Router } from 'express';
import User from '../model/User.js';

const router = express.Router();

// CREATE
router.post('/', async (req, res) => {
    try {
        const {name, age} = req.body;
        
        if(!name || age === null ){
            return res.status(400).json({message: "Missing Fields"})
        }

        const user = await User.create({name, age});
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});
// GET ALL USER
router.get('/', async (req, res) => {
    try {
        const user = await User.find();
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})
// GET ONE USER
router.get('/:id', async (req, res) => {
    try {
        const user = await User.findById(req.params.id);

        if(!user){
            return res.status(404).json({message: "User not found!"})
        }
        res.status(200).json(user);
    } catch (error) {
       res.status(400).json({message: "Invalid ID"}) 
    }
})

// UPDATE
router.put('/:id', async (req, res) => {
try {
    const user = await User.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new: true, runValidators: true}
    )
    if(!user){
            return res.status(404).json({message: "User not found!"})
    }

    res.status(200).json(user)
} catch (error) {
    res.status(400).json({message: "Invalid ID"});
}
});

// DELETE
router.delete('/:id', async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);

        if(!user){
            return res.status(404).json({message: "User not found!"})
        }

        res.status(200).json({message: "User deleted!"});
    } catch (error) {
        res.status(400).json({message: "Invalid ID"});
    }
})

export default router;