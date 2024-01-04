const express = require('express')
const mongoose = require('mongoose')
const url = 'mongodb://localhost/MnitDBex'
const app = express()

mongoose.connect(url,{useNewUrlParser:true})

const con = mongoose.connection

con.on('open',function(){
    console.log('connected...')
})


app.use(express.json())


const personsRouter = require('./route')
app.use('/persons',personsRouter)


app.listen(9000,()=>{
    console.log('server started on 9000')
})