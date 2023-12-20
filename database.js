const sqlite3 = require('sqlite3').verbose();

// Подключение к базе данных
const db = new sqlite3.Database('mydatabase.db', (err) => {
    if (err) {
        console.error('Ошибка при подключении к базе данных:', err.message);
    } else {
        console.log('Подключение к базе данных прошло успешно');
    }
});

// Пример выполнения запроса к базе данных
db.serialize(() => {
    // Создание таблицы (пример)
    db.run('CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY, name TEXT)');

    // Вставка данных в таблицу (пример)
    const stmt = db.prepare('INSERT INTO users (name) VALUES (?)');
    stmt.run('John Doe');
    stmt.finalize();

    // Выборка данных из таблицы (пример)
    db.each('SELECT id, name FROM users', (err, row) => {
        console.log(`${row.id}: ${row.name}`);
    });
});

// Закрытие соединения с базой данных при завершении работы
process.on('exit', () => {
    db.close((err) => {
        if (err) {
            console.error('Ошибка при закрытии базы данных:', err.message);
        } else {
            console.log('Соединение с базой данных закрыто');
        }
    });
});
