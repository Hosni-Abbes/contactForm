<?php
  //check and filter input fields
  $name   = filter_var($_POST['name'], FILTER_SANITIZE_STRING);
  $email  = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
  $msg    = filter_var($_POST['message'], FILTER_SANITIZE_STRING);

  //mail params
  $to      = 'your_email@exmpl.com';  //here put your email 
  $subject = 'Contact Form';
  $headers = 'From: ' . $email . '\r\n';
  

  //check if all input fields are not empty
  if(!empty($name) && !empty($email) && !empty($msg)){
    //check if email is valid
    if(filter_var($email, FILTER_VALIDATE_EMAIL)){
      if(strlen($name) > 4 ){   //check name length
        if(strlen($msg) > 10){  //check message length
          //send this email to my email
          mail($to, $subject, $msg, $headers);
          echo 'success'; //if email sended successfully we use this msg to display success msg
        
        }else{echo 'Please Check Message Field!';}
      }else{echo 'Please Check Name Field!';}
    }else{echo 'Email is Not Valid!!';}
  }else{echo 'All Fields Are Required!';}




?>