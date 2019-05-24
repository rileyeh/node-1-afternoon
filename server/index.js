let express = require('express')
let {getProducts, getProductById} = require('./getProducts')


let app = express()
let port = 5001

app.get('/', (req, res) => {
    res.send('home page')
})

app.get('/api/products', getProducts)

app.get('/api/products/:id', getProductById)

app.listen(port, () => {
    console.log('listening on', port)
})