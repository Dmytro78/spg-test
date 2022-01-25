const db = require('../db')

exports.add = (req, res) => {
        const sql = 'INSERT INTO user2 (id,user_name) VALUES(id,user_name)';
        db.query(sql, (error, rows) => {
             if (error) {
            console.log(error)
        } else {
            res.send(rows)
        }
    })
}