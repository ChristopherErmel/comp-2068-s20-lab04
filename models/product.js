const mongoose = require('mongoose');

// You need to create a new schema and assign it the following
// constant
const ProductSchema = new mongoose.Schema({
    //list of atributes 
    name: {
        //data type
        type: String,
        //validation/ this must be input
        required: true
    },
    Description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
});


module.exports = mongoose.model('Product', ProductSchema);