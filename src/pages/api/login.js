// routes/login.js
// import User from "@/models/user";
import connectToMongoDB from "../../lib/mongoose";
import { compare } from "bcrypt";
import mongoose from "mongoose";
import { signIn } from "next-auth/react";

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      await connectToMongoDB();

      // Specify the correct database name and collection here
      const database = mongoose.connection.db;
      const Users = database.collection("users");

      const { email, password } = req.body;

      // Find the user by email
      const user = await Users.findOne({ email });

      if (!user) {
        return res.status(401).json({ message: "Invalid email or password" });
      }

      // Compare the entered password with the stored hash
      const isPasswordValid = await compare(password, user.password);

      if (!isPasswordValid) {
        return res.status(401).json({ message: "Invalid email or password" });
      }

      // If the password is valid, sign in the user with NextAuth.js
      const signInResult = await signIn("credentials", {
        redirect: false,
        email,
        password,
      });

      if (signInResult.error) {
        return res.status(401).json({ message: "Invalid email or password" });
      }

      // If sign-in is successful, respond with the session object
      res.status(200).json(signInResult);
    } catch (error) {
      console.error("Error logging in:", error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  } else {
    res.status(405).json({ message: "Method not allowed!" });
  }
}
