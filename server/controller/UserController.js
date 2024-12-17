import userModel from "../models/User.js";

//create user api
const createUser = async (req, res) => {
  try {
    const { name, fathername, email, phone } = req.body;

    const newUser = new userModel({
      name,
      fathername,
      email,
      phone,
    });
    await newUser.save();
    res
      .status(200)
      .json({ success: true, Message: "User created successfully", newUser });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ success: false, Message: "Internal Server Error", newUser });
  }
};

//read api

const getUser = async (req, res) => {
  try {
    const user = await userModel.find();

    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "user not found" });
    }

    res.status(200).json({ success: true, user });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ success: false, message: "Internal server error." });
  }
};

//update api

const updateUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const updatedUser = await userModel.findByIdAndUpdate(userId, req.body, {
      new: true,
    });

    if (!updatedUser) {
      return res
        .status(404)
        .json({ success: false, message: "user not found." });
    }

    return res
      .status(200)
      .json({ success: true, message: "User updated successfully." });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ success: false, message: "Internal server error." });
  }
};

//delete user api

const deleteUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const deletedUser = await userModel.findByIdAndDelete(userId);
    if (!deletedUser) {
      return res
        .status(404)
        .json({ success: false, message: "user not found." });
    }
    return res
      .status(200)
      .json({ success: true, message: "user deleted successfully." });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ success: false, message: "Internal server error." });
  }
};

export { createUser, getUser, updateUser, deleteUser };
