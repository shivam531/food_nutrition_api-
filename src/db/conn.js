const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/food_nutrition_db')
.then(() => console.log("Connect with Database"))
.catch(() => console.log("pleae connect with database"))

