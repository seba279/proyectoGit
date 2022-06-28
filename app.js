const express = require('express')
const app = express()

app.use(express.static("public"))

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html")
})  

const PORT = process.env.PORT || 8081

const server = app.listen(PORT, () => {
    console.log(`Servidor express escuchando en el puerto ${PORT}`);
})