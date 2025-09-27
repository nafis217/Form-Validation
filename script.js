// script.js
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const phonenumber = document.getElementById('phonenumber');
const address = document.getElementById('address');


function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector('small');
  formControl.className = 'form-control error';
  small.innerText = message;
}

function setSuccessFor(input) {
  const formControl = input.parentElement;
  formControl.className = 'form-control success';
}

function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  checkInput();
});

function checkInput() {
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const phonenumberValue = phonenumber.value.trim();
  const addressValue = address.value.trim();
  

  if (usernameValue === '') {
    setErrorFor(username, 'Username cannot be blank');
  } else {
    setSuccessFor(username);
  }

  if (emailValue === '') {
    setErrorFor(email, 'Email cannot be blank');
  } else if (!isEmail(emailValue)) {
    setErrorFor(email, 'Not a valid email');
  } else {
    setSuccessFor(email);
  }

  if (passwordValue === '') {
    setErrorFor(password, 'Password cannot be blank');
  } else {
    setSuccessFor(password);
  }

    if (phonenumberValue === '') {
    setErrorFor(phonenumber, 'Phone number cannot be blank');
  } else if (!/^\+?\d{10,15}$/.test(phonenumberValue)) {
    setErrorFor(phonenumber, 'Enter a valid phone number');
  } else {
    setSuccessFor(phonenumber);
  }

  if (addressValue === '') {
    setErrorFor(address, 'Address cannot be blank');
  } else {
    setSuccessFor(address);
  }
}



