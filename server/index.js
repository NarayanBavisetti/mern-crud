const express = require('express')

const app = express();
const PORT = 8080;
app.listen(PORT,() => console.log(`PORT started at ${8000}`))
app.get((req,res) => {
    res.send("Hello Bavisetti")
})
