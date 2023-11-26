const API_URL = process.env.NEXT_PUBLIC_BREVO_API_URL;
const API_KEY = process.env.NEXT_PUBLIC_BREVO_KEY;

// api call for email
export async function sendEmail(name, email) {
  try {
    // Define your email data here
    const emailData = {
      sender: {
        name: "Admin ",
        email: "loveshaffanbasyirah@gmail.com",
      },
      to: [
        {
          email,
          name,
        },
      ],
      subject: "SEE YOU THERE ON 22ND DEC!",
      htmlContent:
        "<!DOCTYPE html> <html> <body> <h1>Solemnization of Shaffan & Basyirah</h1> <p>Dear {{params.name}},</p> <p>Thank you for your RSVP. We, Shaffan & I, are thrilled to have you on our special day. You may refer to our website loveshaffanbasyirah.com made by Shaffan or refer to the details as follows, </p> <table border='1' style='border-collapse: collapse; width: 100%; margin-top: 10px;'> <tr> <td style='width: 20%;'>Date</td> <td style='padding: 8px;'>Friday, 22nd December 2023</td> </tr> <tr> <td style='width: 20%;'>Time</td> <td style='padding: 8px;'>1900 - 2300</td> </tr> <tr> <td style='width: 20%;'>Dresscode</td> <td style='padding: 8px;'>White </td> </tr> <tr> <td style='width: 20%;'>Location</td> <td style='padding: 8px;'>Azue Event Hall, Level 1, Evo Mall, Bangi</td> </tr><tr> <td style='width: 20%;'>Google maps</td> <td style='padding: 8px;'>https://goo.gl/maps/mBhvdzJVbGVkVupU7</td> </tr> <tr> <td style='width: 20%;'>Waze</td> <td style='padding: 8px;'>https://waze.com/ul/hw282g7rdd</td> </tr></table> <p>Do hit us up, should you need further info or if you would like to perform on our wedding night! See you soon <3</p><br/><p>Love, <br/>Basyirah & Shaffan, <br/>loveshaffanbasyirah.com <br/>Basy: 019-3304287<br/>Cube: 018-2861599</p> </div> </body> </html>",
      params: {
        name,
        email,
      },
    };

    // Make the POST request using fetch
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "api-key": API_KEY,
        // Add any other required headers here
      },
      body: JSON.stringify(emailData),
    });

    // Check if the response is successful (status code 2xx)
    if (response.ok) {
      const responseData = await response.json();
      console.log("Email sent successfully:", responseData);
    } else {
      console.error("Error sending email:", response.statusText);
    }
  } catch (error) {
    // Handle any errors
    console.error("Error sending email:", error.message);
  }
}
