console.log("product model loaded...")

var mongoose = require('mongoose');

var ProductSchema = new mongoose.Schema({
    item: String,
}, {timestamps: true})

mongoose.model("Product", ProductSchema);