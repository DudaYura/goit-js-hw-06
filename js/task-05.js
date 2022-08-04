const nameInputRef = document.querySelector('#name-input');
const nameOutputRef = document.querySelector('#name-output');

const onNameInputChange = evt => {

    if (evt.currentTarget.value === '') {
        nameOutputRef.textContent = 'Anonymous';
    } else {
        nameOutputRef.textContent = evt.currentTarget.value;
    }
};

nameInputRef.addEventListener('input', onNameInputChange);
