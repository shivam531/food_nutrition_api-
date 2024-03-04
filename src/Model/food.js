const mongoose= require("mongoose");

const foodschema = new mongoose.Schema({
    
        food_name: String,
        food_group: String,
        discription: String,
        calories: Number,
        protin: Number,
        carbs: Number,
        fats: Number
})

const foodchat = new mongoose.model('foodchat',foodschema);
module.exports=foodchat;