// pages/api/saveData.js

import connectToMongoDB from "@/lib/mongoose";
import mongoose from "mongoose";

// Define a schema for your data
const attendanceSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  email: { type: String, required: true },
  attendance: { type: Boolean, default: false },
});

// Create a model based on the schema
const Attendance = mongoose.model("Attendance", attendanceSchema);

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      // Connect to MongoDB
      await connectToMongoDB();

      // Create a new document based on the model
      const newAttendance = new Attendance(req.body.data);

      // Save the document to the database
      await newAttendance.save();

      res.status(201).json({ message: "Data saved successfully!" });
    } catch (error) {
      await connectToMongoDB();

      res
        .status(500)
        .json({ message: "Something went wrong!", error: error.message });
    }
  } else {
    res.status(405).json({ message: "Method not allowed!" });
  }
}
