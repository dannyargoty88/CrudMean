const cors = require('cors')
const express = require('express')
const mongoose = require('mongoose')

const auto = require('./routes/auto')

const app = express()
app.use(cors())//intemediario cliente servidor
app.use(express.json())
app.use("/api/auto",auto)



const port = process.env.PORT || 3000

app.listen(port, ()=> {console.log("Sevidor ejecutando en puerto",port)})

mongoose.connect("mongodb://localhost/autodb",{
    useNewUrlParser:true, 
    useFindAndModify:false,
    useCreateIndex: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log('Conexion DB True')
})
.catch((error) => {
    console.log('Conexion DB False. ',error)
})