import mongoose from "mongoose";

const attendanceSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phoneNumber: { type: String, required: false },
  email: { type: String, required: false },
  numberOfPax: { type: String, required: true },
});

const Attendance = mongoose.model("Attendance", attendanceSchema);

export default Attendance;
