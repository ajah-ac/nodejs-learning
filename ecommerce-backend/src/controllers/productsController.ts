import { response, request } from 'express'
import productsData from '../data/products.ts'
interface ProdParams{
    category?:string,
        minPrice?:number,
    maxPrice?:number,
    search?:string,

}
export const getAllProducts = (req:request<ProdParams>, res:response) => {
 const {category,minPrice, maxPrice, search}=req.body;
if(req.body===undefined){
    return res.status(200).json(productsData)
}
if(category && category.trim()!==''){
    const filtered=productsData.filter(p=>p.category.toLowerCase()===category.toLowerCase())
if(filtered.length===0){
    return res.status(404).send(`No products exist in ${category} category` )
}
 return res.status(200).json(filtered)
}
if(search && search.trim()!==''){
       const filtered=productsData.filter(p=>(p.name.toLowerCase()|| p.description ).includes(search.toLowerCase()))
if(filtered.length===0){
    return res.status(404).send(`No products exist in ${category} category` )
} 
 return res.status(200).json(filtered)

}
}