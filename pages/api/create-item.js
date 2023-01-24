export default function handler(req, res) {
    const {
        name, 
        description, 
        quantity, 
        condition, 
        categoryId, 
        locationId, 
        brandId
    } = req.body

    const item = {
        name: name,
        description: description,
        quantity: quantity,
        condition: condition,
        categoryId: categoryId,
        locationId: locationId,
        brandId: brandId
    }

    // TODO: validate data.

    const max = 1000;
    const id = Math.floor(Math.random() * max) // TODO: generate real ID.

    res.status(200).json({ id: id })
}