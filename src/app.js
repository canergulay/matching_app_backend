require('dotenv').config()
const app = require("../src/config/express/express_init")


app.get('/', function (req, res) {
    res.send('hello world')
})




app.listen(process.env.PORT)