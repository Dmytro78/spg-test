const db = require('../db')

exports.user = (req, res) => {
    
    db.query('SELECT * FROM user2 WHERE id=?', [req.params.id], (error, rows) => {
        if (error) {
            console.log(error)
        } else {
            res.send(rows)
        }
    })
}