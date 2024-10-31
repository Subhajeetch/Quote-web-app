const emailInput = document.querySelector('.email-input');
const passInput = document.querySelector('.pass-input');

const warnDiv = document.querySelector('.warning');



emailInput.addEventListener('focus', () => {
  warnDiv.style.opacity = 0;
});

emailInput.addEventListener('blur', () => {
  warnDiv.style.opacity = 1;
});

passInput.addEventListener('focus', () => {
  warnDiv.style.opacity = 0;
});

passInput.addEventListener('blur', () => {
  warnDiv.style.opacity = 1;
});