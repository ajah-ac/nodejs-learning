import { products} from "../models/step5";
export const getProducts=(req,res)=>{
    res.json(products)
}
export const createProducts=(req,res)=>{
    const newItem={
        id:Date.now(),
        name:req.body.name,
        price:req.body.price,
        description:req.body.description
    }
    items.push(newItem)
    res.json(newItem)
}