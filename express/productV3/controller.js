const { ObjectId } = require('mongodb');
const db = require('../../config/mongodb');

const index = (req, res) => {
    db.collection('products').find()
        .toArray()
        .then(result => res.send(result))
        .catch(error => {
            console.error(error);
            res.status(500).send('Internal Server Error');
        });
}

const view = (req, res) => {
    const {id} = req.params;
    db.collection('products').findOne({_id: ObjectId(id)})
        .then(result => res.send(result))
        .catch(error => {
            console.error(error);
            res.status(500).send('Internal Server Error');
        });
}

const store = (req, res) => {
    const {id, name, price, stock, status} = req.body;
        db.collection('products').insertOne({id, name, price, stock, status})
        .then(result => res.send(result))
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

    const {id} = req.params;

    db.collection('products').updateOne(
        {_id: ObjectId(id)},
        ...dataUpdate,
    )
    .then(result => res.send(result))
    .catch(error => {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }); 
}

const destroy = (req, res) => {
    const {id} = req.params;
    db.collection('products').deleteOne({_id: ObjectId(id)})
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
