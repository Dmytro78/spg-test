const app = require('./app')
const bodyParser = require('body-parser')
const port = process.env.PORT || 3500

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

const routes = require('./routes/routes')
routes(app)

app.listen(port, () => {
  console.log(`Server running. Use our API on port: ${port}`)
})
