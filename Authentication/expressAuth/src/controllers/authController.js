//import authService from '../services/authService.js';
import { login } from "../services/authService.js";
// login
// function imported is not good practice named with the same name origin function

const loginUser = async(req, res, next) => {
    try {
        const {userName, password} = req.body;
        // await authService.loginUser(username, password);
        const token = await login(userName, password);
        res.status(200).json({token});
    } catch (error) {
        next(error);
    }

}

export {loginUser};

// resgister an user

// loguot