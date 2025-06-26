const checkoutForm = document.getElementById('checkoutForm');

checkoutForm.addEventListener('submit', function (e) {
  e.preventDefault();
  console.log(e.target[0].value);

  let formCorrect = true;

  const emailInput = document.getElementById('email');
  if (!validateEmail(emailInput.value)) formCorrect = false;

  const phoneInput = document.getElementById('phone');
  if (!validatePhone(phoneInput.value)) formCorrect = false;

  const firstnameInput = document.getElementById('firstname');
  if (!validateFirstname(firstnameInput.value)) formCorrect = false;

  const lastnameInput = document.getElementById('lastname');
  if (!validateLastname(lastnameInput.value)) formCorrect = false;

  const adressInput = document.getElementById('adress');
  if (!validateAdress(adressInput.value)) formCorrect = false;

  const cityInput = document.getElementById('city');
  if (!validateCity(cityInput.value)) formCorrect = false;

  const stateInput = document.getElementById('state');
  if (!validateState(stateInput.value)) formCorrect = false;
  
  const zipcodeInput = document.getElementById('zipcode');
  if (!validateZipcode(zipcodeInput.value)) formCorrect = false;

  const cardnumberInput = document.getElementById('cardnumber');
  if (!validateCardnumber(cardnumberInput.value)) formCorrect = false;

  const expDateInput = document.getElementById('expDate');
  if (!validateExpDate(expDateInput.value)) formCorrect = false;

  const cvvInput = document.getElementById('cvv');
  if (!validatecvv(cvvInput.value)) formCorrect = false;

  // TODO: Do validation for the rest of the fields

  if (formCorrect) {
    checkoutForm.classList.add('hidden');

    document.getElementById('success').classList.remove('hidden');
  }
});

document.getElementById('email').addEventListener('change', function (e) {
  validateEmail(e.target.value);
});

document
  .getElementById('phone')
  .addEventListener('change', (e) => validatePhone(e.target.value));

  document.getElementById('firstname').addEventListener('change', (e) => validateFirstname(e.target.value));

  document.getElementById('lastname').addEventListener('change', (e) => validateLastname(e.target.value));

  document.getElementById('adress').addEventListener('change', (e) => validateAdress(e.target.value));

  document.getElementById('city').addEventListener('change', (e) => validateCity(e.target.value));

  document.getElementById('state').addEventListener('change', (e) => validateState(e.target.value));

  document.getElementById('zipcode').addEventListener('change', (e) => validateZipcode(e.target.value));

  document.getElementById('cardnumber').addEventListener('change', (e) => validateCardnumber(e.target.value));

  document.getElementById('expDate').addEventListener('change', (e) => validateExpDate(e.target.value));

  document.getElementById('cvv').addEventListener('change', (e) => validatecvv(e.target.value));

function validateEmail(emailInput) {
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const emailError = document.getElementById('emailError');

  if (!emailPattern.test(emailInput)) {
    emailError.innerText =
      'Please enter correct email address, e.g. email@example.com';
    emailError.classList.remove('hidden');
    return false;
  } else {
    emailError.classList.add('hidden');
    return true;
  }
}

function validatePhone(phoneInput) {
  const phonePattern = /^\+?\d(?:\s?\d){9,19}$/;
  const phoneError = document.getElementById('phoneError');

  if (phoneInput.trim().length < 1) {
    phoneError.innerText = 'Phone cannot be empty.';
    phoneError.classList.remove('hidden');
    return false;
  } else if (!phonePattern.test(phoneInput)) {
    phoneError.innerText =
      'Please enter correct phone number, e.g. 555 123 4567';
    phoneError.classList.remove('hidden');
    return false;
  } else {
    phoneError.classList.add('hidden');
    return true;
  }
}

function validateFirstname(firstnameInput) {
  const firstnamePattern = /^[a-zA-Zа-яА-ЯёЁ\s'-]{2,}$/;
  const firstnameError = document.getElementById('firstnameError');

  if (firstnameInput.trim().length < 1) {
    firstnameError.innerText = 'Firstname cannot be empty.';
    firstnameError.classList.remove('hidden');
    return false;
  } else {
    firstnameError.classList.add('hidden');
    return true;
  }
}

function validateLastname(lastnameInput) {
  const lastnamePattern = /^[a-zA-Zа-яА-ЯёЁ\s'-]{2,}$/;
  const lastnameError = document.getElementById('lastnameError');

  if (lastnameInput.trim().length < 1) {
    lastnameError.innerText = 'Lastname cannot be empty.';
    lastnameError.classList.remove('hidden');
    return false;
  } else {
    lastnameError.classList.add('hidden');
    return true;
  }
}

function validateAdress(adressInput) {
  const adressPattern = /^[a-zA-Zа-яА-ЯёЁ0-9\s.,'-]{5,}$/;
  const adressError = document.getElementById('adressError');

  if (adressInput.trim().length < 1) {
    adressError.innerText = 'Adress cannot be empty.';
    adressError.classList.remove('hidden');
    return false;
  } else {
    adressError.classList.add('hidden');
    return true;
  }
}

function validateCity(cityInput) {
  const cityPattern = /^[a-zA-Zа-яА-ЯёЁ0-9\s.,'-]{5,}$/;
  const cityError = document.getElementById('cityError');

  if (cityInput.trim().length < 1) {
    cityError.innerText = 'City cannot be empty.';
    cityError.classList.remove('hidden');
    return false;
  } else {
    cityError.classList.add('hidden');
    return true;
  }
}

function validateState(stateInput) {
  const statePattern = /^[a-zA-Zа-яА-ЯёЁ\s'-]{2,}$/;
  const stateError = document.getElementById('stateError');

  if (stateInput.trim().length < 1) {
    stateError.innerText = 'State cannot be empty.';
    stateError.classList.remove('hidden');
    return false;
  } else {
    stateError.classList.add('hidden');
    return true;
  }
}

function validateZipcode(zipcodeInput) {
  const zipcodePattern = /^\d{5}(-\d{4})?$/;
  const zipcodeError = document.getElementById('zipcodeError');

  if (zipcodeInput.trim().length < 1) {
    zipcodeError.innerText = 'Zipcode cannot be empty.';
    zipcodeError.classList.remove('hidden');
    return false;
  } else {
    zipcodeError.classList.add('hidden');
    return true;
  }
}

function validateCardnumber(cardnumberInput) {
  const cardnumberPattern = /^(\d{4} ?){3,4}\d{1,4}$/;
  const cardnumberError = document.getElementById('cardnumberError');

  if (cardnumberInput.trim().length < 1) {
    cardnumberError.innerText = 'Card number cannot be empty.';
    cardnumberError.classList.remove('hidden');
    return false;
  } else if (!cardnumberPattern.test(cardnumberInput)) {
    cardnumberError.innerText =
      'Please enter correct card number, e.g. 1234 5678 9101 1121';
    cardnumberError.classList.remove('hidden');
    return false;
  } else {
    cardnumberError.classList.add('hidden');
    return true;
  }
}

function validateExpDate(expDateInput) {
  const expDatePattern = /^(0[1-9]|1[0-2])\/\d{2}$/;
  const expDateError = document.getElementById('expDateError');

  if (expDateInput.trim().length < 1) {
    expDateError.innerText = 'Expiration Date cannot be empty.';
    expDateError.classList.remove('hidden');
    return false;
  } else if (!expDatePattern.test(expDateInput)) {
    expDateError.innerText =
      'Please enter correct expiration date, e.g. MM/YY';
    expDateError.classList.remove('hidden');
    return false;
  } else {
    expDateError.classList.add('hidden');
    return true;
  }
}

function validatecvv(cvvInput) {
  const cvvPattern = /^\d{3,4}$/;
  const cvvError = document.getElementById('cvvError');

  if (cvvInput.trim().length < 1) {
    cvvError.innerText = 'CVV cannot be empty.';
    cvvError.classList.remove('hidden');
    return false;
  } else {
    cvvError.classList.add('hidden');
    return true;
  }
}

function handleSubmit() {}
