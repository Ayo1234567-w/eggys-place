import PRODUCT from "../models/productModel.js";

// C -- for create in CRUD

export const createProduct = async (req,res)=>{
    const {title,image,description,rating,price,category,duration} = req.body;
    if(!title || !image || !rating || !description || !category || !price || !duration ){
        res.status(400).json({success:false,errMsg:"all fields are required"})
        return
    }
    try {
        const product = await PRODUCT.create(req.body);
        res.status(200).json({success:true,message:"product created successfully",product})
    } catch (error) {
        res.status(500).json(error.message)
    }
}


//  insert many
export const products = async (req,res)=>{
    try{
        const product = await PRODUCT.insertMany(req.body);
        res.status(201).json({success:true,message:"products created successfully", product})
    }catch(error){
        res.status(500).json(error.message)  

    }
}

// get products
export const allProducts = async(req,res)=>{
    try {
        const products = await PRODUCT.find()
        res.status(200).json({sucess:true,message:"all products",products})
        
    } catch (error) {
        res.status(500).json(error.message)
        
    }
}
// single product
export const product = async(req,res)=>{
    try {
        const product = await PRODUCT.findById(req.params.productId)
        if(!product){
            res.status(404).json(
              {success:false,errMsg:"product not found"}  
            )
            return;
        }
        res.status(200).json({success:true,message:"product found",product});
        
    } catch (error) {
        res.status(500).json(error.message)
        
    }
}