const checkoutForm = document.getElementById('checkoutForm');

checkoutForm.addEventListener('submit', function (e) {
  e.preventDefault();
  console.log(e.target[0].value);

  let formCorrect = true;

  const emailInput = document.getElementById('email');
  if (!validateEmail(emailInput.value)) formCorrect = false;

  const phoneInput = document.getElementById('phone');
  if (!validatePhone(phoneInput.value)) formCorrect = false;

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

function handleSubmit() {}
