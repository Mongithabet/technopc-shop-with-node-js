import express from "express";
import mongoose from "mongoose"
import Product from "../model/Product.model"
import bodyParser from "body-parser"
const app =express()
app.use(bodyParser.json())
const uri = "mongodb://localhost:27017/mydatabase2"
mongoose.connect(uri,(err)=>{
    if(err) console.log(err);
    else console.log("Mongo Data base connected successfully")
})
app.get("/",(req,res)=>{
    res.send("hello")
})
app.get ("/products",(req,res)=>{
    Product.find((err,products)=>{
        if(err) res.status(500).send(err)
        else res.send(products)
    })
})
app.post ("/products",(req,res)=>{
    let product = new Product(req.body)
    product.save((err)=>{
        if(err) res.status(500).send(err)
        else res.send(product)
    })
})
app.listen(8085,()=>{
    console.log("serveur démaré")
})