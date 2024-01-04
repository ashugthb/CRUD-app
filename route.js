const express = require('express')
const router = express.Router()
const Person = require('./models')

router.get('/',async(req,res)=>{
    try{
        const persons = await Person.find()
        res.json(persons)
    }catch(err){
        res.send("Error"+err)
    }
})


router.get('/:id',async(req,res)=>{
    try{
        const person = await Person.findById(req.params.id)
        res.json(person)
    }catch(err){
        res.send("Error"+err)
    }
})


router.post('/',async(req,res)=>{
        const person = new Person({
            name:req.body.name,
            number:req.body.number,
            address:req.body.address,
            payment:req.body.payment
        })
    try{
        const a1 = await person.save()
        res.json(a1)
    }catch(err){
        res.send("Error")
    }
})


router.patch('/:id',async(req,res)=>{
    try{
        const person = await Person.findById(req.params.id)
        person.payment = req.body.payment
        person.name = req.body.name
        person.number = req.body.number
        person.address = req.body.address
        const a1 = await person.save()
        res.json(a1)
    }catch(err){
        res.send(err)
    }
})

router.delete('/:id',async(req,res)=>{
    try{
        const person = await Person.findByIdAndDelete(req.params.id)
        res.json(person)
    }catch(err){
        res.send(err)
    }
})

module.exports = router