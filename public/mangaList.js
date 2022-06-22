

const form = document.querySelector('#manga-form')
const inputField = document.querySelector('#manga-input-field')
const imgField = document.querySelector("#img-address")
const linkField = document.querySelector("#manga-address")

const mangaList = document.querySelector('#manga-list')


// const baseURL = "http://localhost:4005"

const deleteCard = (id) => {
    axios.delete(`/api/allMangas/${id}`)
    .then(()=> getAllMangas())
    .catch(err => console.log(err))
}


const getAllMangas = () => {
    mangaList.innerHTML = ''

    axios.get(`/api/allMangas`)
    .then(res => {
        const mangaArr = res.data
        console.log(mangaArr)
        
        mangaArr.forEach(manga => {
            let {manga_id, name, img_url, manga_link} = manga

            let mangaCard = `<div class="manga-card">
          
            <img alt='manga cover' src = ${img_url} class="manga-cover" />
            <a href="${manga_link}" target="_blank" class="href-link">${name}</a>
                
            <button onclick="deleteCard(${manga_id})">Delete</button>
            
            </div>`
            mangaList.innerHTML += mangaCard
        })
    })
}

getAllMangas()


const addManga = (evt) => {
    evt.preventDefault()

    console.log(inputField.value)

    let body = {
        name: inputField.value,
        img_url: imgField.value,
        manga_link: linkField.value
    }
    axios.post(`/api/allMangas`, body)
    .then(res => { 
        console.log('hit frontend line 52')
        getAllMangas()

     })
        .catch(err => console.log(err))
        
        inputField.value = ''
        imgField.value = ''
        linkField.value = ''
        
}





form.addEventListener('submit', addManga)
