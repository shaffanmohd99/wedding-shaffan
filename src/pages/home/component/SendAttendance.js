// Function for sending attendance to MongoDB
const SendAttendance = async (data) => {
  // if (typeof window !== "undefined") {
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
  // }
};

export default SendAttendance;
