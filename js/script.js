fetch('https://rickandmortyapi.com/api/character')
.then(response => response.json())
.then(data => {   
    let nbPages = data.info.pages
    for (let pages = 1; pages < nbPages; pages++) {
        fetch('https://rickandmortyapi.com/api/character?page='+pages)
        .then(response => response.json())
        .then(data => {
            data.results.forEach(i => {new Card(i)});
     })
    }
})
