// pages/api/getAttendance.js

import connectToMongoDB from "../../lib/mongoose";
import mongoose from "mongoose";

const handleError = (res, statusCode, message, error) => {
  console.error(error);
  res.status(statusCode).json({ message, error: error.message });
};

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      // Connect to MongoDB
      await connectToMongoDB();

      // Specify the correct database name here
      const database = mongoose.connection.db;

      // Retrieve all data from the "attendance" collection
      const data = await database.collection("attendances").find().toArray();

      res.status(200).json(data);
    } catch (error) {
      handleError(res, 500, "Internal Server Error", error);
    }
  } else {
    res.status(405).json({ message: "Method not allowed!" });
  }
}
