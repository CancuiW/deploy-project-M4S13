require('dotenv').config()

const express=require('express')
const cors=require('cors')
const server=express()

const port=process.env.PORT||9000
server.use(express.json())
server.use(cors())

server.get('/api/hello',(req,res)=>{
    res.json({message:'api is working'})
})

server.use('*',(req,res)=>{
    res.send(`<h1>Hello,there! </h1>`)
})

server.use((err,req,res,next)=>{//eslint-disable-line
    res.status(500).json({
        message:err.message,
        stack:err.stack
    })
})
//console.log(process.env.PORT, process.env.NODE_ENV)
 server.listen(port,()=>{
 console.log(`listening on ${port}`)
 })