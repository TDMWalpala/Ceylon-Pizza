const { Schema, model, models } = require("mongoose");

const UserSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        validate: password =>  {
            if(!password?.length || password.length <5){
                new Error('password must be at least 5 characters')
            }
        },
    },
},{timestamps:true});

export const User = models?.User || model('User',UserSchema) 
