export const validate = (req, res, next) => {
    const { name, price } = req.body;

    if (typeof name !== 'string' || name.trim() === '' ) {
        return res.status(400).send('Invalid name');
    }

    if (typeof price !== 'number') {
        return res.status(400).send('Price must be a number');
    }

    next();
};