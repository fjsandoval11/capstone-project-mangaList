require('dotenv').config()



const express = require('express')
const app = express()
const cors = require('cors')
const path = require('path')
const {PORT} = process.env


app.use(express.json())
app.use(cors())
app.use(express.static("public"))

const controllerFile = require('./controller') 

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/mangaList.html'))
})




app.get('/api/allMangas', controllerFile.getAllMangas)
app.post('/api/allMangas', controllerFile.addManga)
app.delete('/api/allMangas/:id', controllerFile.deleteManga)









app.listen(PORT, () => console.log(`up on ${PORT}`))

