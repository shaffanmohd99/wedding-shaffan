import mongoose from "mongoose";

const attendanceSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  email: { type: String, required: true },
  numberOfPax: { type: String, required: true },
});

const Attendance = mongoose.model("Attendance", attendanceSchema);

export default Attendance;
