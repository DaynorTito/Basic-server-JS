// create a model for a user from models folder
import mongose from 'mongoose'

//define the user schema
const userSchema = {
    id: Number,
    name: String,
    age: Number
};

// create and export the user model to expprt
export const User = mongose.model('User', userSchema);