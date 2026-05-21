export type ProductsType = {
    id: number,
    name: string,
    description: string,
    price: number,
    category: string,
    stock: number,
    image: string,
    createdAt: Date,
    UpdateAt: Date
}
export const products: ProductsType[] = [
    {
        id: 1,
        name: 'nike',
        description: 'This was a products',
        price: 100,
        category: 'shoes',
        stock: 2,
        image: 'imgs',
        createdAt: new Date(),
        UpdateAt: new Date()

    },
    {
        id: 2,
        name: 'orange',
        description: 'This is an orange , an orange is orange in color and makes orange juice',
        price: 40,
        category: 'fruits',
        stock: 3,
        image: 'imgs',
        createdAt: new Date(),
        UpdateAt: new Date()

    },
    {
        id: 3,
        name: 'car',
        description: 'Can it work with a blue car, yes it will, do you have a blue car, no i got a red  but i wanted to know incase i buy a blue car',
        price: 200,
        category: 'vehicles',
        stock: 4,
        image: 'imgs',
        createdAt: new Date(),
        UpdateAt: new Date()

    }
]