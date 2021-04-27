const express = require('express');
const app = express();
const path = require('path')
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/ProductCatalogueDB', {useNewUrlParser: true, useUnifiedTopology: true})
.then(()=>{
    console.log("DB Connected")
}).catch((err)=>{
    console.log("DB Connection error");
    console.log(err);
})

const productSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        min:0
    },
    desc:{
        type:String
    }
})

const Product = mongoose.model('Product', productSchema);


app.get("/",(req, res)=>{
    res.send("<h1>Slash Route</h1>")
})



app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, '/views'));



app.listen(3000,()=>{
    console.log("Server running at port 3000");
})