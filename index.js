import express from "express";
import mongoose from "mongoose";
import cors from 'cors'
import "dotenv/config";
import { userRouter } from "./src/router/UserRoute.js";

const app = express();
app.use(express.json());
app.use(cors())  //npm i cors

app.use("/api/users", userRouter)

mongoose.connect(process.env.DB_SECRET_KEY)
  .then(() => console.log("Connected!"))
  .catch((err) => console.log("not Connected!"));

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`);
});


// app.get("/", async (req, res) => {
//   try {
//     const users = await UserModel.find({});
//     res.status(200).json(users);
//   } catch (error) {
//     res.send("");
//   }
// });

// app.get("/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     const users = await UserModel.findById(id);
//     res.json(users);
//   } catch (error) {
//     res.send(error.message);
//   }
// });

// app.post("/", async (req, res) => {
//   try {
//     const { userName, email, password, age, isMarried } = req.body;
//     const newUser = new UserModel({ userName, email, password, age, isMarried, });
//     await newUser.save();
//     res.json("user yarandi");
//   } catch (error) {
//     res.send(error.message);
//   }
// });

// app.put("/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     const { userName, email, password, age, isMarried } = req.body;
//     const users = await UserModel.findByIdAndUpdate(id, { userName, email, password, age, isMarried, });
//     res.json(users);
//   } catch (error) {
//     res.send(error.message);
//   }
// });

// app.delete("/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     const users = await UserModel.findByIdAndDelete(id);
//     res.json(users);
//   } catch (error) {
//     res.send(error.message);
//   }
// });

//mongodb+srv://mi7lu3zbz:Baku20032021@cluster0.sj9lfog.mongodb.net/
