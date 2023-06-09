const mongoose = require('mongoose');
const {ObjectId} = mongoose.Schema.Types;

const postSchema = new mongoose.Schema({
    description:{
        type:String,
        requirec:true
    },
    location:{
        type:String,
        requirec:true
    },
    likes:[
        {
            type:ObjectId,
            ref:"UserModel"
        }
    ],

    comments:[
        {
            commentText:String,
            commentedBy:{
                type:ObjectId,
                ref:"UserModel"
            }
        }    
    ],

    image:{
        type:String,
        requirec:true
    },
    author:{
        type: ObjectId,
        ref:"UserModel"
    }

});

mongoose.model("PostModel", postSchema);