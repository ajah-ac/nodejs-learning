import type { Response, Request } from 'express'
import productsData from '../data/products'
import { getById } from '../data/utils/getById.js';
interface ProdParams {
    category?: string,
    minPrice?: number,
    maxPrice?: number,
    search?: string,

}
export const getAllProducts = (
    req: Request<{}, {}, {}, ProdParams>,
    res: Response
) => {
    const { category, minPrice, maxPrice, search } = req.query;
    const min=minPrice? +minPrice : undefined
    const max=maxPrice? +maxPrice : undefined
    if (typeof category === 'string' && category.trim() !== '') {
        const filtered = productsData.filter(p => p.category.toLowerCase() === category.toLowerCase())
        if (filtered.length === 0) {
            return res.status(404).send(`No products exist in ${category} category`)
        }
        return res.status(200).json(filtered)
    }
    if (typeof search === 'string' && search.trim() !== '') {
        const filtered = productsData.filter(p => p.name.toLowerCase().includes(search.toLowerCase()) || p.description.toLowerCase().includes(search.toLowerCase()))
        if (filtered.length === 0) {
            return res.status(404).send(`No products exist in ${category} category`)
        }
        return res.status(200).json(filtered)

    }

    if (min !== undefined && max !== undefined) {
        const filtered = productsData.filter(p => p.price >= min && p.price <= max)
        if (filtered.length === 0) {
            return res.status(200).json([])
        }
        return res.status(200).json(filtered)
    }
    else if (min !== undefined && max === undefined) {
        const filtered = productsData.filter(p => p.price >= min)
        if (filtered.length === 0) {
            return res.status(200).json([])
        }
        return res.status(200).json(filtered)
    }
    else if (max !== undefined && min === undefined) {
        const filtered = productsData.filter(p => p.price <= max)
        if (filtered.length === 0) {
            return res.status(200).json([])
        }
        return res.status(200).json(filtered)
    }
    else {
        res.status(200).json([])
    }
     res.status(200).json(productsData)

}

type Id = {
    id: number
}
export const getProductByid = (req: Request<Id>, res: Response) => {
    const id = +req.params.id
    const product = getById(productsData, id)
    if (product === undefined) {
        return res.status(404).json({ error: 'Product not found' })
    }
    return res.status(200).json(product)
}