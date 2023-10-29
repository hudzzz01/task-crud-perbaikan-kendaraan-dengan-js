import express from "express";
import prisma from "../prisma/client/client.js";
import UserController from "../controller/user.controller.js";

const routerUser = express.Router();
routerUser.get("/login",async(req,res)=>{
    UserController.login(req,res);
})
routerUser.get("/",async(req,res)=>{
    UserController.readAllUser(req,res);
})
routerUser.get("/:id",async(req,res)=>{
    UserController.readUserById(req,res);
})
routerUser.post("/",async(req,res)=>{
    UserController.createUser(req,res);
})
routerUser.put("/:id",async(req,res)=>{
    UserController.updateUser(req,res);
})
routerUser.delete("/:id",async(req,res)=>{
    UserController.deleteUser(req,res);
})

export default routerUser;