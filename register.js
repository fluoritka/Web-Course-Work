// register.js
async function handleForm(formId) {
    var username = document.getElementById(formId).querySelector('[name="username"]').value;
    var password = document.getElementById(formId).querySelector('[name="password"]').value;

    // Отправка данных на сервер в зависимости от выбранной формы
    const response = await fetch(`http://localhost:3000/${formId}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
    });

    const data = await response.json();

    // Обработка ответа от сервера
    if (data.success) {
        // Переход на страницу новостей после успешной регистрации или авторизации
        window.location.href = 'library.html';
    } else {
        alert(`Ошибка ${formId === 'registerForm' ? 'регистрации' : 'авторизации'}: ${data.message}`);
    }
}
