const mongoose = require('mongoose')

const personSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    number:{
        type:Number,
        require:true
    },
    address:{
        type:String,
        require:true
    },
    payment:{
        type:Boolean,
        require:true,
        default:false
    }

})

module.exports = mongoose.model('Person',personSchema)