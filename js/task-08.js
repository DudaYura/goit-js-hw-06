const formRef = document.querySelector('.login-form');
formRef.addEventListener('submit', onFormSubmit);

function onFormSubmit(evt) {
    evt.preventDefault();

    const { elements: { email, password } } = evt.currentTarget;
    
    if (email.value === '' || password.value === '') {
        alert('Все поля должны быть заполнены!');
        return;
    }


    const formElements = {};

    for (const element of evt.currentTarget.elements) {
        if (element.name) formElements[element.name] = element.value;
    }

    console.log(formElements);
    
    evt.currentTarget.reset();
}