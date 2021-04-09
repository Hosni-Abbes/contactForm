let form  = document.querySelector('.contact_form'),
    sendBtn  = document.querySelector('.send'),
    erMsg = document.querySelector('.err_msg'),
    closeErrMsg = document.querySelector('.close'),
    inputName = document.querySelector('.name'),
    inputEmail = document.querySelector('.email'),
    message = document.querySelector('.msg'),
    errorName = document.querySelector('.name_err'),
    errorEmail = document.querySelector('.email_err'),
    errorMsg = document.querySelector('.msg_err');

sendBtn.onclick=function(e){
  e.preventDefault();
  //make new XMLHttpRequest to send form 
  let xhr = new XMLHttpRequest();
  xhr.open('POST', 'contact.php', true);
  xhr.onload=function(){
    if(xhr.readyState === XMLHttpRequest.DONE){
      if(xhr.status === 200){
        let data = xhr.response;
        //if form sended successfully
        if(data == 'success'){
          erMsg.textContent = 'We Have Recieved Your Message';
          if(erMsg.classList.contains('error')){
            erMsg.classList.remove('error');
          }
          erMsg.classList.add('success');
          erMsg.style.display = 'block';
          closeErrMsg.style.display = 'block';
          //empty input fields and textarea
          inputName.value = '';
          inputEmail.value = '';
          message.value = '';
        
        }else{  //if there is errors
          erMsg.textContent = data;
          if(erMsg.classList.contains('success')){
              erMsg.classList.remove('success');
          }
          erMsg.classList.add('error');
          erMsg.style.display = 'block';
          closeErrMsg.style.display = 'block';
        }
      }
    }
  }
  let dataForm = new FormData(form);
  xhr.send(dataForm);

}

//close errors div when click on 'x'
closeErrMsg.onclick=function(){
  erMsg.style.display = 'none';
  closeErrMsg.style.display = 'none';
  erMsg.classList.remove('error');
  erMsg.classList.remove('success');
}

//display errors
inputName.oninput=function(){
  if(inputName.value.length > 0 && inputName.value.length < 5){
    errorName.textContent = 'Name Must be More Than 4 Characters!';
    errorName.style.display = 'block';
    inputName.classList.add('border_err');
  }else{
    errorName.style.display = 'none';
    inputName.classList.remove('border_err');
  }
}
inputEmail.oninput=function(){
    if(inputEmail.value != '' && inputEmail.value.includes('@') && inputEmail.value.includes('.')){
      errorEmail.style.display = 'none';
      inputEmail.classList.remove('border_err');
    }else if(inputEmail.value == ''){
      errorEmail.style.display = 'none';
      inputEmail.classList.remove('border_err');
    }else{
      errorEmail.textContent = 'Please Enter a Valid Email!';
      inputEmail.classList.add('border_err');
      errorEmail.style.display = 'block';
    }
}
message.oninput=function(){
  if(message.value.length > 0 && message.value.length < 11 ){
    errorMsg.textContent = 'Message Must Be More Than 10 Characters!';
    message.classList.add('border_err');
    errorMsg.style.display = 'block';
  }else{
    errorMsg.style.display = 'none';
    message.classList.remove('border_err');
  }
}

inputName.onblur=function(){
  if(inputName.value == '' ){
    errorName.textContent = 'Name Field Cant Be Empty!';
    inputName.classList.add('border_err');
    errorName.style.display = 'block';
  }else{
    inputName.classList.remove('border_err');
  }
}
inputEmail.onblur=function(){
  if(inputEmail.value == '' ){
    errorEmail.textContent = 'Email Cant Be Empty!';
    inputEmail.classList.add('border_err');
    errorEmail.style.display = 'block';
  }else{
    inputEmail.classList.remove('border_err');
  }
}
message.onblur=function(){
  if(message.value == '' ){
    errorMsg.textContent = 'Message Field Cant Be Empty!';
    message.classList.add('border_err');
    errorMsg.style.display = 'block';
  }else{
    message.classList.remove('border_err');
  }
}