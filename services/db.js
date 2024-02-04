// Connect node and mongoDb using mongoose

// 1 . import mongoose

const mongoose= require('mongoose');

// 2. connection string

mongoose.connect('mongodb://localhost:27017/Contact-App');

//3. create a model

const contact =mongoose.model('contact',{

      
        address:String,
        id: Number,
         email: String,
        name: String,
         phone: String

})

module.exports={
    contact
}