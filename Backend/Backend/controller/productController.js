const {LocalStorage} = require("node-localstorage");
const mongoose = require("mongoose");
const pSchema = require("../models/productModel.js");
const localstorage1 = new LocalStorage("./nextid");


const nextid = ()=>{
    const currentId = parseInt(localstorage1.getItem('nextId') || '1');
    localstorage1.setItem('nextId', currentId + 1);
    return currentId;
}

const getProduct = (async(req,res)=>{
    const productData = await pSchema.find({});
    return res.json(productData);
});

const getsingleProduct = (async (req, res) => {
  const id = req.params.id;
  try {
    const item = await pSchema.findById(id); 
    if (!item) {
      return res.status(404).json({ message: 'Item not found' });
    }
    res.json(item);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err });
  }
});

const postProduct = (async(req,res)=>{
    const newid = nextid() 
    const newProduct = new pSchema({
        ...req.body,
        id : newid
    })
    await newProduct.save()
    res.status(201).send(newProduct);
});

const deleteProduct = (async(req,res)=>{
    const id = req.params.id;
    const deletedItem = await pSchema.findByIdAndDelete(id);
    if(!deletedItem){
        return res.status(404).send("product not found")
    }
    return res.status(200).send(deletedItem);
});

const putProduct = (async(req,res)=>{
    const valid = req.params.id;
    const updatedproduct = await pSchema.findById(valid);

    if(!updatedproduct){
        return res.status(404).send("not found");
    }
   
    const {productName,stockKeepingUnit,category,productDetails,quantityInHand,unitOfMeasure,currency,unitCost,sellingCost,sellerName,BatchNumber} = req.body;

    updatedproduct.productName = productName;
    updatedproduct.stockKeepingUnit = stockKeepingUnit;
    updatedproduct.category = category;
    updatedproduct.productDetails = productDetails;
    updatedproduct.quantityInHand = quantityInHand;
    updatedproduct.unitOfMeasure = unitOfMeasure;
    updatedproduct.currency = currency;
    updatedproduct.unitCost = unitCost;
    updatedproduct.sellingCost = sellingCost;
    updatedproduct.sellerName = sellerName;
    updatedproduct.BatchNumber = BatchNumber;

    await updatedproduct.save();

    return res.json({
        successful : true,
    })
})


module.exports = {getProduct, getsingleProduct, postProduct, deleteProduct, putProduct};