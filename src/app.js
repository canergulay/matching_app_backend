require('dotenv').config()
require('./config/mongodb/config')
const app = require("../src/config/express/express_init")




const smsVerificationRoute = require('../src/config/verification_router_injector')



app.get('/', function (req, res) {
    res.send('hello world')
})

app.use(smsVerificationRoute)


app.listen(process.env.PORT)