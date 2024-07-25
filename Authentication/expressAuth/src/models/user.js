// create a model for a user from models folder
import bcrypt from 'bcrypt';
import mongose, { Mongoose } from 'mongoose';


const userSchema = new mongose.Schema({
    name: {type: String},
    age: {type: Number},
    userName: {type: String, index: {unique: true}},
    password: {type: String}

});


// mongoose middleware

// with this object we can acces all of fields our documents
// don't use arrow functions here
userSchema.pre('save', async function(next) {
    this.password = await bcrypt.hash(this.password, 10);
    next();
});

//define a method
userSchema.methods.comparePasswords = function (givenPassword) {
    return bcrypt.compare(givenPassword, this.password);
};

//define the user schema
// const userSchema = {
//     id: Number,
//     name: String,
//     age: Number
// };

// create and export the user model to expprt
export const User = mongose.model('User', userSchema);