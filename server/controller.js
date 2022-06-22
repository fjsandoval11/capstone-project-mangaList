require('dotenv').config()
const Sequelize = require('sequelize')
const {DATABASE_URL} = process.env

const sequelize = new Sequelize(DATABASE_URL, {
    dialect: 'postgres',
    dialectOptions: {
        ssl: {
            rejectUnauthorized: false
        }
    }
})


module.exports = {

    // seed: (req,res) => {

    // },

    getAllMangas: (req,res) => {
        sequelize.query(`
        SELECT manga_id, name, img_url, manga_link FROM mangas;
        `)
        .then(dbRes => res.status(200).send(dbRes[0]))
        .catch(err => console.log('ya code aint working g'))

    },

    addManga: (req,res) => {
        let {name, img_url, manga_link} = req.body

        sequelize.query(`
        INSERT INTO mangas(name, img_url, manga_link)
        VALUES('${name}','${img_url}','${manga_link}');
        
        `)
        .then(dbRes => {
            res.status(200).send(dbRes[0])
            
        })
    },

    deleteManga: (req,res) => {
        let {id} = req.params
        sequelize.query(`
        DELETE FROM mangas
        WHERE manga_id = ${id};
        `)
        .then(dbRes => res.status(200).send(dbRes[0]) )
    }
}