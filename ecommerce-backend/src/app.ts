import express from 'express'
import ProductsRoutes from './routes/products'
import UsersRoutes from './routes/users'
import OrdersRoutes from './routes/orders'

const app=express()
app.use(express.json())
app.use('/api/products',ProductsRoutes)
app.use('/api/users',UsersRoutes)
app.use('/api/orders',OrdersRoutes)

app.listen(3000,()=>{
    console.log('Server is listening on port 3000')
})