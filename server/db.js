const Pool = require("pg").Pool;

const pool = new Pool({
    host: "localhost",
    user: "postgres",
    password: "Woronowska87",
    port: 5432,
    database: "dbcompany"
});

module.exports = pool;