import { response } from "express";
import User from "../Model/user-schema.js";

export const getUsers = async (req, res) => {
  try {
   let users =  await User.find();
    res.json(users)
  } catch (error) {
    response.json({ message: error.message });
  }
};

export const addUser = async (request, response) => {
  const user = request.body;
  const newUser = new User(user);

  try {
    await newUser.save();
    response.json(newUser)
  } catch (error) {
    response.json({ message: error.message });
  }
};


export const getUserById = async (request,response) => {
  const id = request.params.id;
  try{
    const user = await User.findById(id);
    response.json(user);

  }catch(error){
    response.json(message)
  }
}

export const editUser = async (request,res) => {
  const user = request.body;
  const editUser = new User(user)

  try{
    await User.updateOne({_id: request.params.id}, editUser);

  }catch(error){
    res.json({message: error.message})
  }
}

export const deleteUser = async(req,res) => {
  try{
    await User.deleteOne({_id: req.params.id})
    res.json("User deleted sucessfully ");
  }catch(error){
    res.json({message: error.message})
  }
}