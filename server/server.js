require('dotenv').config()



const express = require('express')
const app = express()
const cors = require('cors')
const {PORT} = process.env


app.use(express.json())
app.use(cors())

const controllerFile = require('./controller') 

// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public/mangaList.html'))
// })


app.get('/api/allMangas', controllerFile.getAllMangas)
app.post('/api/allMangas', controllerFile.addManga)
app.delete('/api/allMangas/:id', controllerFile.deleteManga)









app.listen(PORT, () => console.log(`up on ${PORT}`))

