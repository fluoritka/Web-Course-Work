// client_script.js
async function login() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Отправка данных на сервер
    const response = await fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
    });

    const data = await response.json();

    // Обработка ответа от сервера (в данном примере просто выводим в консоль)
    console.log(data);
}

function buyBook(bookNumber) {
    alert("Вы купили книгу " + bookNumber);
    // Здесь вы можете добавить дополнительную логику для обработки покупки книги
}

function goToCart() {
    // Переход на страницу корзины
    window.location.href = 'cart.html'; // Замените на фактический путь
}

function goToLibrary() {
    // Переход на страницу библиотеки
    window.location.href = 'library.html'; // Замените на фактический путь
}
