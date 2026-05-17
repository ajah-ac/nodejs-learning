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
export default router