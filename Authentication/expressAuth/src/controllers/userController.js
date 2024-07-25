import { User } from "../models/user.js";

const createUser = async (req, res, next) => {
    const user = new User(req.body);
    try {
        const doc =  await user.save();
        res.status(201).json(doc);
    } catch (error) {
        console.error(error);
        // const error = new Error(`There was an error saving a user ${err}`);
        // next(error);
        throw new Error(`There was an error saving a user ${err}`);

    }
};

const getUsers = async (req, res, next) => {
    const user = new User(req.body);
    try {
        const users = await User.find(); 
        res.status(201).json(users);
    } catch (error) {
        console.error(error);
        // const error = new Error(`There was an error saving a user ${err}`);
        // next(error);
        throw new Error(`There was an error getting all users ${err}`);

    }
};

const getUserByName = async (req, res, next) => {
    const { name } = req.params;
    try {
        const user = await User.find({name: name})
        res.status(200).json(user);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: `There was an error retrieving the user: ${error.message}` });
    }
};

const getUserById = async (req, res, next) => {
    const { id } = req.params;
    const numericId = parseInt(id, 10);
    try {
        const user = await User.findOne({ id: numericId });
        if (!user)
            throw USER_NOT_FOUND(id);
        
        res.status(200).json(user);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: `There was an error retrieving the user: ${error.message}` });
    }
};
export {createUser, getUsers, getUserByName, getUserById};