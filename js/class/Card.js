class Card {
    constructor(i){
        let card = document.createElement('div')
        card.className = 'card text-center m-3 bg-dark text-light'
        card.style = 'width: 18rem;'
        card.id = 'card' + i.id
    document.getElementById('cardContainer').appendChild(card)

    let img = document.createElement('img')
        img.src = i.image
        img.className = 'card-img-top'
        img.alt = 'image du personnage'
    document.getElementById('card'+i.id).appendChild(img)

    let divCardBody = document.createElement('div')
        divCardBody.className = 'card-body'
        divCardBody.id = 'card-body'+i.id
    document.getElementById('card'+i.id).appendChild(divCardBody)

    let nameCharacter = document.createElement('h5')
        nameCharacter.className = 'card-title'
        nameCharacter.innerText = i.name
    document.getElementById('card-body'+i.id).appendChild(nameCharacter)

    let idCharacter = document.createElement('p')
        idCharacter.innerText = i.id
    document.getElementById('card-body'+i.id).appendChild(idCharacter)
    }
}