export default function handler(req, res) {
    const { name, description, quantity, categoryId, locationId, conditionId, brandId } = req.body

    const item = {
        name: name,
        description: description,
        quantity: quantity,
        categoryId: categoryId,
        locationId: locationId,
        conditionId: conditionId,
        brandId: brandId,
        createdAt: Date.now(),
    }

    console.log('item', item);

    const max = 1000;
    const id = Math.floor(Math.random() * max)

    res.status(200).json({ id: id })
}