import mongoose from "mongoose";

const attendanceSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  email: { type: String, required: true },
  attendance: { type: Boolean, default: false },
});

const Attendance = mongoose.model("Attendance", attendanceSchema);

export default Attendance;
