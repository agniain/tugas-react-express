const Product = require('./model');

const index = async (req, res) => {
    try{
        const product = await Product.find()
        res.json(product)
    }
    catch(error){
        console.error(error);
        res.status(500).send('Internal Server Error');
    };
}

const view = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findOne({ id: id })
        res.json(product)
    }
    catch(error){
        console.error(error);
        res.status(500).send('Internal Server Error');
    };
}

const store = async(req, res) => {
    try {
        const productCreate = new Product(req.body);            
        await productCreate.save();
        console.log(productCreate);
        res.send(productCreate);
    }
    catch(error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    };
}

const update = async (req, res) => {
    try {
        const productUpdate = await Product.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true}
        );
        res.send(productUpdate);
    }
    catch(error){
        console.error(error);
        res.status(500).send('Internal Server Error');
    }; 
}

const destroy = async (req, res) => {
    try {
        const { id } = req.params;
        await Product.deleteOne({ id: id });
        res.send('Product deleted');
    }
    catch(error) {
            console.error(error);
            res.status(500).send('Internal Server Error');
    };
}
module.exports = {
    index,
    view,
    store,
    update,
    destroy
}