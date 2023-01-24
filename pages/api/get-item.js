export default function handler(req, res) {
    const {id} = req.body

    if(!id) {
        res.status(400).json({})
    } else {
        res.status(200).json({id: id, name: 'Test item'})
    }
}