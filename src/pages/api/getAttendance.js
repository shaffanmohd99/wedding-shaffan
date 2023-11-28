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

      // Specify the correct database name and collection here
      const database = mongoose.connection.db;
      const collection = database.collection("attendances");

      // Pagination parameters from query params
      const page = parseInt(req.query.page, 10) || 1; // default to page 1 if not provided
      const rowsPerPage = parseInt(req.query.rowsPerPage, 10) || 10; // default to 10 rows per page if not provided

      // Calculate skip based on pagination
      const skip = (page - 1) * rowsPerPage;

      // Retrieve data with pagination
      const data = await collection
        .find()
        .skip(skip)
        .limit(rowsPerPage)
        .toArray();

      // Count total documents for pagination info
      const totalDocuments = await collection.countDocuments();

      // Calculate total pages
      const totalPages = Math.ceil(totalDocuments / rowsPerPage);

      // Calculate "from" and "to" values
      const from = skip + 1;
      const to = Math.min(skip + rowsPerPage, totalDocuments);

      res.status(200).json({
        data,
        pagination: {
          currentPage: page,
          totalPages,
          rowsPerPage,
          totalDocuments,
          from,
          to,
        },
      });
    } catch (error) {
      handleError(res, 500, "Internal Server Error", error);
    }
  } else {
    res.status(405).json({ message: "Method not allowed!" });
  }
}
