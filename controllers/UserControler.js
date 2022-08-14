import UserModel from "../models/UserModel.js";

// sign up
export const signup = async (req, res) => {
   try {
      const newUser = new UserModel(req.body);
      await newUser.save();
      res.status(200).json("user created successfully");
   } catch (error) {
      console.log(error);
   }
};
