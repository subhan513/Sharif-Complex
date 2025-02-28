import sendgrid from "@sendgrid/mail";

// sendgrid.setApiKey(process.env.SENDGRID_API_KEY);
sendgrid.setApiKey(process.env.SENDGRID_API_KEY)
async function sendEmail(req, res) {
  try {
    
    await sendgrid.send({
      to: "info@solnyne.com",  
      from: "no-reply@solnyne.com",  
      subject: `[Lead solnyne.com - Solar Calculator] : ${req.body.fullname}`,
      html: ` <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
      <html lang="en">
      <head>
        <meta charset="utf-8">       
        <meta http-equiv="Content-Type" content="text/html charset=UTF-8" />       
      </head>      
      <body>
      <div style="margin-left: 20px;margin-right: 20px; ">
      <table>
        <tr style="font-size:18px; font-weight:bold;  padding-bottom:10px;"><td style="width:20%; text-align:right;">Full Name :</td><td style="text-transform:capitalize; text-align:left; padding-left:5px;">${req.body.fullname}</td></tr>
        <tr style="font-size:18px; font-weight:bold; padding-bottom:10px; "><td style=" text-align:right;">Email :</td><td style="text-transform:capitalize; text-align:left; padding-left:5px;">✉️ ${req.body.email} </td></tr>
        <tr style="font-size:18px; font-weight:bold; padding-bottom:10px; "><td style=" text-align:right;">Phone :</td><td style="text-transform:capitalize; text-align:left; padding-left:5px;">${req.body.phone} </td></tr>         
        <tr style="font-size:18px; font-weight:bold; padding-bottom:10px; "><td style=" text-align:right;">Total Load :</td><td style="text-transform:capitalize; text-align:left; color:red; padding-left:5px;">${req.body.totalwatts} </td></tr>   
          
        <tr><td></td><td style="text-align:center; padding-top:20px;"><img src="https://solnyne.com/solnyne-logo.png"  style="height: 100px; text-align:center;width: auto; overflow: hidden;"/> </td></tr>
      </table>   
    
    </div>

      </body>
      </html>`,
    });
  } catch (error) {
     
    return res.status(error.statusCode || 500).json({ error: error.message });
  }

  return res.status(200).json({ error: "" });
}

export default sendEmail;
