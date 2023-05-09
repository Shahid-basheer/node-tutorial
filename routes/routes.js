const express = require('express');
const router = express.Router();
const Model = require("../model/model");


//Post Method
router.post('/post',async (req, res) => {
    const data = new Model({
        name:req.body.name,
        age:req.body.age
    })

    try{
        dataToSave = await data.save();
        res.status(200).json(dataToSave);
    }
    catch(error){
        res.status(400).json({message:error.message});
    }
})

//Get all Method
router.get('/getAll', async(req, res) => {
    try{
        data = await Model.find();
        res.status(200).json(data);
    }
    catch(error){
        res.status(400).json({message:error.message});
    }
})

//Get by ID Method
router.get('/getOne/:id',async (req, res) => {
    
    try{
        const data = await Model.findById(req.params.id);
        res.status(200).json(data);
    }
    catch(error){
        res.status(400).json({message:error.message});
    }
})

//Update by ID Method
router.patch('/update/:id', async(req, res) => {
    
    try{
        const id = req.params.id;
        const updatedData = req.body;
        const options = {new:true};

        const result = await Model.findByIdAndUpdate(id,updatedData,options);
        res.status(200).json(result);
    }
    catch(error){
        res.status(400).json({message:error.message});
    }
})

//Delete by ID Method
router.delete('/delete/:id',async (req, res) => {
    
    try{
        const id = req.params.id;
        const data = await Model.findByIdAndDelete(id);
        res.status(200).json(data);
    }
    catch(error){
        res.status(400).json(error);
    }
})

module.exports = router;