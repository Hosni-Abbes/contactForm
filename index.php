<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="main.css">
  <title>Contact Form</title>
</head>
<body>
  <div class="container">
    <h1>Contact Us</h1>
    <form class='contact_form' action="#">
      <div class="err_msg"></div>
      <span class="close">x</span>
      <input class="name" type="text" name="name" placeholder="Your Name">
      <div class="err name_err"></div>
      <input class="email" type="email" name="email" placeholder="Your Email">
      <div class="err email_err"></div>
      <textarea class="msg" name="message" placeholder="Your Message"></textarea>
      <div class="err msg_err"></div>
      <input class="send" type="submit" value="Send">
    </form>
  </div>
  
  <script src="main.js"></script>
</body>
</html>