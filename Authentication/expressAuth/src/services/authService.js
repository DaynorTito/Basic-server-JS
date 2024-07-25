import { User } from "../models/user.js";
import jwt from 'jsonwebtoken';

const SECRET = "SuperSecret";
const login = async (userName, password) => {
    // logic for login
    // compare the beetwen givenpassword and database password
        const user = await User.findOne({userName});
        const validPassword = await user.comparePasswords(password);
        if (!validPassword) {
            throw new Error("Invalid password");

        }
        const token = jwt.sign({userName, age: user.age}, SECRET);
        return token;

};

export {login};