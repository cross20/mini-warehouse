export default function handler(req, res) {
    const {id} = req.body

    if(!id) {
        res.status(400).json({})
    } else {
        const fakeItem = {
            id: id,
            name: 'Fake item',
            description: 'Fake item used for testing purposes.',
            quantity: 1,
            condition: 2,
            createdAt: Date.now()
        } // TODO: remove fake item.

        res.status(200).json({item: fakeItem})
    }
}