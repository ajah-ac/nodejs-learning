import express from 'express'
import ProductsRoutes from './routes/products.js'
import UsersRoutes from './routes/users.js'
import OrdersRoutes from './routes/orders.js'

const app=express()
app.use(express.json())


app.listen(3000,()=>{
    console.log('Server is listening on port 3000')
})