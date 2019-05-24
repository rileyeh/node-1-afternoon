let products = require('../products.json')

let getProducts = (req, res) => {
    if (req.query.price)  {
        let items = products.filter(val => val.price >= +req.query.price)
        return res.status(200).send(items)
    }
    res.status(200).send(products)
}

let getProductById = (req, res) => {
    let {id} = req.params
    let product = products.find(product => +product.id === +id)
    if (!product) {
        return res.status(500).send('Item not in list')
    }
    res.status(200).send(product)
}

module.exports = {
    getProducts,
    getProductById
}