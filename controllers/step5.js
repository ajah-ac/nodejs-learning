import { products} from "../models/step5.js";
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
export const getProductByid=(req,res)=>{
    const id=Number(req.params.id)
      if(isNaN(id)){
      return  res.status(400).send(`Id must be a valid number`)
    }
    const found=products.find(item=>item.id===id)
    if(!found){
      return  res.status(404).send(`Product with id:${id} not found`)
    }
  
    res.json(found)
}
