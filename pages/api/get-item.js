export default function handler(req, res) {
    const { itemId } = req.body

    if(!itemId) {
        throw new Error('Item ID is required to retrieve an item')
    }

    res.status(200).json({ id: itemId, name: 'Test item' })
}