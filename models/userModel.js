const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    username: {
        type: 'string',
        required: [true,"Please add the user name"],
    },
    email:{
        type:'string',
        required: [true,"Please add the user email"],
        unique: [true,"Email address already in taken"]
    },
    password:{
        type:'string',
        required: [true,"Please add the user password"]
    }
},
    {
        timestamps: true
    });

module.exports = mongoose.model("user",userSchema);    