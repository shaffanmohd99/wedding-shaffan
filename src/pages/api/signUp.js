// routes/signup.js
import connectToMongoDB from "../../lib/mongoose";
import mongoose from "mongoose";

import { hash } from "bcrypt";


const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

const User = mongoose.model("User", userSchema);

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      await connectToMongoDB();

      const { email, password } = req.body;

      // Check if the user already exists
      const existingUser = await User.findOne({ email });

      if (existingUser) {
        return res.status(400).json({ message: "User already exists" });
      }

      // Hash the password
      const hashedPassword = await hash(password, 10);

      // Create a new user
      const newUser = new User({
        email,
        password: hashedPassword,
      });

      // Save the user to the database
      await newUser.save();

      res.status(201).json({ message: "User registered successfully" });
    } catch (error) {
      console.error("Error creating user:", error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  } else {
    res.status(405).json({ message: "Method not allowed!" });
  }
}
