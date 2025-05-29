console.log('hello world!');

// When running JS code in terminal, we use NODEJS environment and Window and Document objects are not available there!
// When running JS code in the browser, we have access to Window (browser window) and document (HTML) objects
console.log('Window', window);
console.log('Document', document);

const themeSwitchButton = document.getElementById('themeSwitch');
console.log('themeSwitchButton', themeSwitchButton);

themeSwitchButton.addEventListener('click', () => {
  const bodyElement = document.getElementsByTagName('body');
  const textElements = document.getElementsByClassName('text');

  console.log(bodyElement);

  if (themeSwitchButton.textContent === 'Light mode') {
    // USE CSS CLASSES HERE INSTEAD OF MODIFYING STYLE DIRECTLY
    bodyElement[0].style.backgroundColor = '#f3f4f6';

    for (const el of textElements) {
      el.style.color = '#111827';
    }

    themeSwitchButton.textContent = 'Dark mode';
  } else {
    bodyElement[0].style.backgroundColor = '#111827';

    for (const el of textElements) {
      el.style.color = '#f3f4f6';
    }

    themeSwitchButton.textContent = 'Light mode';
  }
});

const image = document.getElementById('firstImg');

// const imgAlt = document.querySelector('#firstImg');
console.log('image', image);
image.style.width = '100%';

const heading1 = document.querySelector('h1');
console.log('h1', heading1);
heading1.style.textAlign = 'center';

const link = document.getElementById('clickMeLink');
console.log('clickMeLink', link);
link.setAttribute('href', 'https://google.com');

link.classList.add('btn');

console.log('clickMeLink', link);

