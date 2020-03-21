const mongoose = require("mongoose");
const { Product } = require('../models/product.model');
module.exports.index = ( request, response) => {
    response.json({
        message:"Hello World from product manager"
    })
}

module.exports.createProduct = (request, response) => {
    const {title, price, description } = request.body;
    Product.create({
        title,
        price,
        description
    })
        .then(product => response.json(product))
        .catch(err => response.json(err));
}

module.exports.getAllProducts = ( request, response) => {
    Product.find({})
        .then(products => response.json(products))
        .catch(err => response.json(err));
}

module.exports.getProduct = (request, response) => {
    Product.findOne({_id:request.params.id})
        .then(product => response.json(product))
        .catch(err => response.json(err))
}