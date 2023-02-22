const sqlite3 = require("sqlite3");
const { open } = require("sqlite")

module.exports = () =>
    open({
        filename: './src/db/eConsulta.sqlite',
        driver: sqlite3.Database,
    });