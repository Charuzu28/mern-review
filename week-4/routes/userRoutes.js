import express, { Router } from 'express';
import User from '../model/User.js';
import mongoose from 'mongoose';

const router = express.Router();

// CREATE
router.post('/', async (req, res) => {
    try {
        const {name, age} = req.body;
        
        if(!name || age === null ){
            return res.status(400).json({message: "Missing Fields"})
        }

        const user = await User.create({name, age});
        res.status(201).json(user);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});
// GET ACTIVE USER
router.get('/active', async (req, res) => {
    try {
        const page = Number(req.query.page) || 1;
        const limit = 5;
        const skip = (page - 1) * limit;

        const user = await User.find(
        {active: true}, {name: 1, age: 1}
        )
        .skip(skip)
        .limit(limit)

        if(user.length === 0){
            return res.status(404).json({message: "User not found!"})
        }

        res.status(200).json(user)
    } catch (error) {
        res.status(500).json({message: error.message})
    }    
})
// GET ONE USER { DEFENSIVE }
router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        if(!mongoose.Types.ObjectId.isValid(id)){
            return res.status(400).json({message: "Invalid ID!"});
        }

        const user = await User.findById(id);

        if(!user){
            return res.status(404).json({message: "User not found!"})
        }
        res.json(user);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
    
})


// UPDATE
router.put('/:id', async (req, res) => {
    try {
        const { id } = req.params;

        if(!mongoose.Types.ObjectId.isValid(id)){
            return res.status(404).json({message: "Invalid ID!"})
        }

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
        res.status(500).json({message: error.message});
    }
    
 
});

// DELETE
router.delete('/:id/deactivate', async (req, res) => {
    try {
        const { id } = req.params;
        if(!mongoose.Types.ObjectId.isValid(id)){
            return res.status(404).json({message: "Invalid ID!"});
        }

        const user = await User.findByIdAndUpdate(
            id,
            {active: false},
            {new: true}
        );

        if(!user){
            return res.status(404).json({message: "User not found!"})
        }

        res.status(200).json({message: "User deactivated!"});
    } catch (error) {
        res.status(500).json({message: error.message});
    }
    
    
})

export default router;