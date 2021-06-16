import express from "express"
import { addUser, deleteUser, editUser, getUserById, getUsers } from "../Controller/user-controller.js";


const route = express.Router();

route.get("/", getUsers);
route.post('/add', addUser)
route.get('/:id', getUserById)
route.put('/:id',editUser)
route.delete('/:id',deleteUser)

export default route;
