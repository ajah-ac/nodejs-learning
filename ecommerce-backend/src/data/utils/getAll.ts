import type { ProductsType } from "../products"
import { response, request } from 'express'

const getAll=(data:ProductsType)=>{
return (req:request,res:response)=>{
res.status(200).send(data)
}
}
export default getAll