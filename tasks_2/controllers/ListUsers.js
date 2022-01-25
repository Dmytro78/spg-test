const db = require('../db')

exports.users = (req, res) => {
    
    db.query('SELECT * FROM user2', (error, rows) => {
        if (error) {
            console.log(error)
        } else {
            res.send(rows)
        }
    })
}