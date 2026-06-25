const mongoose = require("mongoose");


const productSchema = new mongoose.Schema({
    id:{
        type:Number,
        require:true,
        unique : true
    },
    productName:{
        type:String,
        require:true,
    },
    stockKeepingUnit:{
        type:String,
        require:true
    },
    category:{
        type:String,
        require:true
    },
    productDetails:{
        type:String,
        require:true
    },
    quantityInHand:{
        type:Number,
        require:true,
    },
    unitOfMeasure:{
        type:String,
        require:true,
    },
    currency:{
        type:String,
        require:true
    },
    unitCost:{
        type:Number,
        require:true
    },
    sellingCost:{
        type:Number,
        require:true
    },
    sellerName:{
        type:String,
        require:true,
        default:"NOT KNOWN",
    },
    BatchNumber:{
        type:Number,
        require:true
    }
})

const pSchema = mongoose.model("Product", productSchema);

module.exports = pSchema