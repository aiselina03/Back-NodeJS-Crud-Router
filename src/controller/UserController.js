// 1. Methodlari copy-paste edib export edirik
// 2. UserModeli import edirik

import { UserModel } from "../model/UserModel.js";

export const getAllUser = async (req, res) => {
  try {
    const users = await UserModel.find({});
    res.status(200).json(users);
  } catch (error) {
    // res.send("");
    res.send(500).send(error.message)
  }
};

export const getUser = async (req, res) => {
  try {
    const { id } = req.params;
    const users = await UserModel.findById(id);
    res.json(users);
  } catch (error) {
    res.send(error.message);
  }
};

export const createUser = async (req, res) => {
  try {
    const { userName, email, password, age, isMarried } = req.body;
    const newUser = new UserModel({ userName, email, password, age, isMarried, });
    await newUser.save();
    res.json("user yarandi");
  } catch (error) {
    res.send(error.message);
  }
};

export const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { userName, email, password, age, isMarried } = req.body;
    const users = await UserModel.findByIdAndUpdate(id, { userName, email, password, age, isMarried, });
    res.json(users);
  } catch (error) {
    res.send(error.message);
  }
};

export const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const users = await UserModel.findByIdAndDelete(id);
    res.json(users);
  } catch (error) {
    res.send(error.message);
  }
};
