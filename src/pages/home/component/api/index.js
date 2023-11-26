import * as yup from "yup";

// function for sending attendace  to mongodb
export async function SendAttendance(data) {
  if (typeof window !== "undefined") {
    try {
      const response = await fetch("/api/wedding", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          data,
        }),
      });

      if (response.ok) {
        alert("Data saved successfully!");
      } else {
        alert("Something went wrong!");
      }
    } catch (error) {
      console.error("Error making API call:", error);
      alert("Something went wrong!");
    }
  }
}

//validation 
export const getValidationSchema = () => {
  return yup.object().shape({
    name: yup.string().required("Name is required"),
    email: yup
      .string()
      .email("Invalid email format")
      .required("Email is required"),
    phoneNumber: yup.string().required("Phone number is required"),
    attendance: yup.string().required("Attendance is required"),
  });
};


