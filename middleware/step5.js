export const validate = (req, res, next) => {
    const { name, price,description } = req.body;
if(name===undefined || price===undefined ||description===undefined){
    return res.status(400).send('Please fill in all fields')
}

    if (typeof name !== 'string' || name.trim()==='') {
        return res.status(400).send('Invalid name');
    }
if (typeof description !== 'string' || description.trim()==='') {
        return res.status(400).send('Invalid description');
    }
    if (typeof price !== 'number' || price<0) {
        return res.status(400).send('Price must be a number');
    }

    next();
};