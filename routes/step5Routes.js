import express from 'express'
const items=[{ id: 1,
    name: 'apple',
    price: 200,
description:'Hello world'},{
    id: 2,
    name: 'orange',
    price: 300,
description:'Hello world'},{
    id: 3,
    name: 'mango',
    price: 100,
description:'Hello world'}
]
const router=express.Router();
router.get('/',(req,res)=>{

    res.json(items)
})
const validate = (req, res, next) => {
    const { name, price } = req.body;

    if (typeof name !== 'string' || name.trim() === '') {
        return res.status(400).send('Invalid name');
    }

    if (typeof price !== 'number') {
        return res.status(400).send('Price must be a number');
    }

    next();
};
router.post('/',validate,(req,res)=>{
    const newItem={
        id:Date.now(),
        name:req.body.name,
        price:req.body.price,
        description:req.body.description
    }
    items.push(newItem)
    res.json(newItem)
})
export default router