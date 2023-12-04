const Product = require('./model');

const index = (req, res) => {
    Product.find()
        .then(result => res.send(result))
        .catch(error => {
            console.error(error);
            res.status(500).send('Internal Server Error');
        });
}

const view = (req, res) => {
    const { name } = req.params;
    Product.findOne({ name })
        .then(result => res.send(result))
        .catch(error => {
            console.error(error);
            res.status(500).send('Internal Server Error');
        });
}

const store = (req, res) => {
    const {name, price, stock, status} = req.body;
        console.log(req.body);
        
        Product.create({name, price, stock, status})
        .then(result => {
            console.log(result);
            res.send(result)
        })
        .catch(error => {
            console.error(error);
            res.status(500).send('Internal Server Error');
        });
}

const update = (req, res) => {
    const {name, price, stock, status} = req.body;

    let dataUpdate = {
        name,
        price,
        stock,
        status,
    };
    const byName = req.params.name;

    Product.updateOne(
        { name: byName }, 
        { $set: { ...dataUpdate}}
    )
    .then(result => res.send(result))
    .catch(error => {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }); 
}

const destroy = (req, res) => {
    const { name } = req.params;
    Product.deleteOne({ name })
        .then(result => res.send(result))
        .catch(error => {
            console.error(error);
            res.status(500).send('Internal Server Error');
        });
}
module.exports = {
    index,
    view,
    store,
    update,
    destroy
}