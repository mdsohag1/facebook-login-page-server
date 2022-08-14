import UserModel from "../models/UserModel.js";
import AdminModel from "../models/AdminModel.js";

//admin login
export const signin = async (req, res) => {
   try {
      const user = await AdminModel.findOne({
         email: req.body.email,
         password: req.body.password,
      });
      if (!user) {
         res.status(401).json("usr not found");
      } else {
         res.status(200).json(user);
      }
   } catch (error) {
      console.log(error);
   }
};

// getAllUser
export const allUsers = async (req, res) => {
   try {
      const user = await UserModel.find();
      res.status(200).json(user);
   } catch (error) {
      console.log(error);
   }
};
