// // pages/api/saveData.js

// import connectToMongoDB from "@/lib/mongoose";
// import Attendance from "@/models/attendance";
// import mongoose from "mongoose";

// // // Define a schema for your data
// // const attendanceSchema = new mongoose.Schema({
// //   name: { type: String, required: true },
// //   phoneNumber: { type: String, required: true },
// //   email: { type: String, required: true },
// //   attendance: { type: Boolean, default: false },
// // });

// // // Create a model based on the schema
// // const Attendance = mongoose.model("Attendance", attendanceSchema);

// export default async function handler(req, res) {
//   if (req.method === "POST") {
//     try {
//       // Connect to MongoDB
//       await connectToMongoDB();

//       // Create a new document based on the model
//       const newAttendance = new Attendance(req.body.data);

//       // Save the document to the database
//       await newAttendance.save();

//       res.status(201).json({ message: "Data saved successfully!" });
//     } catch (error) {
//       await connectToMongoDB();

//       res
//         .status(500)
//         .json({ message: "Something went wrong!", error: error.message });
//     }
//   } else {
//     res.status(405).json({ message: "Method not allowed!" });
//   }
// }

// pages/api/saveData.js

import connectToMongoDB from "@/lib/mongoose";
import Attendance from "@/models/attendance";
import mongoose from "mongoose";

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
  } else if (req.method === "PUT") {
    try {
      // Connect to MongoDB
      await connectToMongoDB();

      // Get the ID and data from the request body
      const { id, data } = req.body;
      console.log("🚀 ~ file: wedding.js:76 ~ handler ~ data:", data);
      console.log("🚀 ~ file: wedding.js:76 ~ handler ~ id:", id);

      // Validate that the provided ID is a valid ObjectId
      if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ message: "Invalid ID format" });
      }

      // Find the document by ID and update it with the new data
      const updatedAttendance = await Attendance.findByIdAndUpdate(
        id,
        data,
        { new: true } // Set to true to return the modified document
      );

      if (!updatedAttendance) {
        return res.status(404).json({ message: "Data not found" });
      }

      res
        .status(200)
        .json({ message: "Data updated successfully!", updatedAttendance });
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
