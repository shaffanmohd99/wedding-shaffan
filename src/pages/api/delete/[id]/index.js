// pages/api/deleteData/[id].js

import connectToMongoDB from "@/lib/mongoose";
import mongoose from "mongoose";

// // Define a schema for your data
// const attendanceSchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   phoneNumber: { type: String, required: true },
//   email: { type: String, required: true },
//   attendance: { type: Boolean, default: false },
// });

// // Create a model based on the schema
// const Attendance = mongoose.model("Attendance", attendanceSchema);

const handleError = (res, statusCode, message, error) => {
  console.error(error);
  res.status(statusCode).json({ message, error: error.message });
};

export default async function handler(req, res) {
  if (req.method === "DELETE") {
    try {
      // Check if the user is authenticated
      // const session = await getSession({ req });

      // if (!session) {
      //   return res.status(401).json({ message: "Unauthorized" });
      // }

      // Connect to MongoDB
      await connectToMongoDB();

      // Get the _id from the request parameters
      const { id } = req.query;

      // Validate that the provided ID is a valid ObjectId
      if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ message: "Invalid ID format" });
      }

      // Use the new keyword when creating an instance of ObjectId
      const objectId = new mongoose.Types.ObjectId(id);

      // Specify the correct database name and collection here
      const database = mongoose.connection.db;
      const collection = database.collection("attendances");

      // Find and delete the document based on the provided ID
      const result = await collection.deleteOne({ _id: objectId });

      if (result.deletedCount === 0) {
        return res.status(404).json({ message: "Data not found" });
      }

      res.status(200).json({ message: "Data deleted successfully!" });
    } catch (error) {
      handleError(res, 500, "Internal Server Error", error);
    }
  } else {
    res.status(405).json({ message: "Method not allowed!" });
  }
}
