import { Router } from "express";
import { createUser, deleteUser, getAllUser, getUser, updateUser } from "../controller/UserController.js";
import { myLogger } from "../middleware/loggerMiddle.js";

export const userRouter= Router()

userRouter.get("/", myLogger,getAllUser)
userRouter.get("/:id", getUser)
userRouter.post("/", createUser)
userRouter.put("/:id", updateUser)
userRouter.delete("/:id", deleteUser)