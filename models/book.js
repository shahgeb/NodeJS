const mongoose = require('mongoose');
const { serializeInteger } = require('whatwg-url');

const bookSchema =  new mongoose.Schema ({
    name : {
        type : String,
        required : true
    },  
    des:{
        type:String,
        required:false

    }

});
module.exports = mongoose.model('Books', bookSchema);
 