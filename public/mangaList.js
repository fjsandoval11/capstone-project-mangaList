

const form = document.querySelector('#manga-form')
const inputField = document.querySelector('#manga-input-field')

const mangaList = document.querySelector('#manga-list')


const baseURL = "http://localhost:4005"

const deleteCard = (id) => {
    axios.delete(`${baseURL}/api/allMangas/${id}`)
    .then(()=> getAllMangas())
    .catch(err => console.log(err))
}


const getAllMangas = () => {
    mangaList.innerHTML = ''

    axios.get(`${baseURL}/api/allMangas`)
    .then(res => {
        const mangaArr = res.data
        console.log(mangaArr)
        
        mangaArr.forEach(manga => {
            let {manga_id, name} = manga

            let mangaCard = `<div class="manga-card">
                <h2>${name}</h2>
            <button onclick="deleteCard(${manga_id})">Delete</button>
            
            </div>`
            mangaList.innerHTML += mangaCard
        })
    })
}

getAllMangas()


const addMangaName = (evt) => {
    evt.preventDefault()
    
    console.log(inputField.value)

    let body = {
        name: inputField.value
    }
    axios.post(`${baseURL}/api/allMangas`, body)
    .then(res => { 

        getAllMangas()

     })
        .catch(err => console.log(err))
        
        inputField.value = ''
        
}





form.addEventListener('submit', addMangaName)
