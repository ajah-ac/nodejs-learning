import express from 'express'
import JSONRoutes from '../routes/step5Routes.js'

const app=express();
app.use(express.json())
app.use('/api/products',JSONRoutes)
app.use('/api/products',JSONRoutes)
app.use('/api/products/:id',JSONRoutes)
app.listen(3000,()=>{
    console.log('Server is listening on port 3000')
})