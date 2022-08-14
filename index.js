import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoute from "./routes/UserRoute.js";
import adminRoute from "./routes/AdminRoute.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT;

mongoose
   .connect(process.env.BD_URL)
   .then(() => app.listen(PORT, () => console.log(`app is listen at ${PORT}`)));

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/api/user", userRoute);
app.use("/api/admin", adminRoute);
