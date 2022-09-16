const express = require('express')
const app = express()
const con=require('./db.js')
// const bodyParser=require('body-parser')
const port = 5000
express.json()
let cors = require("cors");
app.use(cors());
app.use(express.json())
con()
app.use('/api/auth/',require('./routes/auth'))
app.use('/Items',require('./routes/Items'))
app.use('/Record',require('./routes/Record'))
app.use('/Graph',require('./routes/Graph'))


app.listen(port, () => {
    

  console.log(`Example app listening on port ${port}`)
})