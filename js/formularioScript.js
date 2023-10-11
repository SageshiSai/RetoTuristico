const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const jsonData = JSON.stringify(formData);
    console.log(jsonData);
});