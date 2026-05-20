import { products } from "../models/step5.js";
export const getProducts = (req, res) => {
    const { minPrice, maxPrice, search } = req.query
    if (minPrice === undefined && maxPrice === undefined && search === undefined) {
        return res.status(200).send(products)
    }
    if (search && search.trim() !== '') {
        const filtered = products.filter(p => p.name.toLowerCase().includes(search.toLowerCase()))
        return res.status(200).send(filtered)
    }
  

}
export const createProducts = (req, res) => {
    const newItem = {
        id: Date.now(),
        name: req.body.name,
        price: req.body.price,
        description: req.body.description
    }
    products.push(newItem)
    res.json(newItem)
}
export const getProductByid = (req, res) => {
    const id = Number(req.params.id)
    if (isNaN(id)) {
        return res.status(400).send(`Id must be a valid number`)
    }
    const found = products.find(item => item.id === id)
    if (!found) {
        return res.status(404).send(`Product with id:${id} not found`)
    }

    res.json(found)
}

export const updateProduct = (req, res) => {
    const id = Number(req.params.id)
    if (isNaN(id)) {
        return res.status(400).send(`Id must be a valid number`)
    }
    const found = products.find(item => item.id === id)
    if (!found) {
        return res.status(404).send(`Product with id:${id} not found`)
    }
    found.name = req.body.name || found.name
    found.description = req.body.description || found.description
    found.price = req.body.price || found.price


    res.json(found)
}



export const deleteProduct = (req, res) => {
    const id = Number(req.params.id)
    if (isNaN(id)) {
        return res.status(400).send(`Id must be a valid number`)
    }
    const index = products.findIndex(p => p.id === id)
    if (index === -1) {
        return res.status(400).send(`No product with ${id} found`)

    }
    products.splice(index, 1)
    res.status(200).send('Deleted successfully')
}
export const filter = (req, res) => {

}
