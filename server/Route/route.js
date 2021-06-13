import express from "express"
import { getUsers } from "../Controller/user-controller";
const route = express.Router();

route.get("/", getUsers());

export default route;
