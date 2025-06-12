const dateInput = document.getElementById('date');
let selectedDate = document.getElementById('selected-date');
const selectedTime = document.getElementById('selected-time');
const messageElement = document.getElementById('message');

const formData = {
  date: null,
  time: null,
};

dateInput.addEventListener('change', function () {
  if (dateInput.value === '') {
    selectedDate.textContent = '-';
    formData.date = null;
  } else {
    selectedDate.textContent = dateInput.value;
    formData.date = dateInput.value;
  }
});

const timeSlotButtons = Array.from(document.getElementsByClassName('slot'));

for (const element of timeSlotButtons) {
  element.addEventListener('click', function () {
    selectedTime.textContent = element.textContent;
    formData.time = element.textContent;
  });
}

document
  .getElementById('bookingForm')
  .addEventListener('submit', function (event) {
    event.preventDefault();
    let formError = '';
    if (!!formData.date && !!formData.time) {
      messageElement.textContent = 'Form submitted successfully';
      // TODO: Update Date and Time on the confirmation card

      document.getElementById('bookingForm').classList.add('hidden');
      document.getElementById('confirmationCard').classList.remove('hidden');

    }
    
    if (!formData.date) {
      formError = 'Date is required.';
      console.log('formError', formError)
    }

    if (!formData.time) {
      formError = formError + ' Time is required';
      console.log('formError', formError)
    }

    if (formError) {
      messageElement.textContent = formError;
    }
  });
