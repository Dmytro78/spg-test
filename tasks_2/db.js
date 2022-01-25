const mysql = require('mysql2')

const { PASSWORD } = process.env

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "spg",
    password: PASSWORD
})

connection.connect((error) => {
    if (error) {
        console.log('NO');
    } else {
        console.log('YES');
    }
}
)

module.exports = connection