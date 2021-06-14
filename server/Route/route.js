import express from "express"
import { addUser, getUsers } from "../Controller/user-controller";
const route = express.Router();

route.get("/", getUsers());
route.post('/add', addUser())
export default route;
