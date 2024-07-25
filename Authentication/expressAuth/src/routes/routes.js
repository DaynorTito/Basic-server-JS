import { Router } from "express";
import { createUser } from "../controllers/userController.js";
import { getUserById, getUserByName, getUsers } from "../controllers/userController.js";

const router = Router();
//route
/**
 * Create a user and stores it in the database
 */

router.post('/users', createUser)
// Get users
router.get('/users', getUsers);
// Get by name
router.get('/users/name/:name', getUserByName);

// Get by id
router.get('/users/id/:id', getUserById);

export default router;