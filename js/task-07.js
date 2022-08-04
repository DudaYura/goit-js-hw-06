const fontSizeControlRef = document.querySelector('#font-size-control');
const textRef = document.querySelector('#text');

fontSizeControlRef.addEventListener('input', onFontSizeChange);

function onFontSizeChange(evt) {
  textRef.style.fontSize = `${evt.currentTarget.value}px`;
}
