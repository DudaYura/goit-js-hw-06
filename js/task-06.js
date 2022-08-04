const textInputRef = document.querySelector('#validation-input');
const symbolsNumberRef = Number(textInputRef.dataset.length);

textInputRef.addEventListener('blur', onInputBlur);

function onInputBlur(evt) {
  
  if (evt.currentTarget.value.length === symbolsNumberRef) {
    evt.currentTarget.classList.add('valid');
    evt.currentTarget.classList.remove('invalid');
  } else {
    evt.currentTarget.classList.add('invalid');
    evt.currentTarget.classList.remove('valid');
  }
};