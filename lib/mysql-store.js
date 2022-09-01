module.exports = (session) => {
    var MySQLStore = require('express-mysql-session')(session);

    var options = {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_NAME
    }

    return new MySQLStore(options);
};
