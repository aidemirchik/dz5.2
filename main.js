let base = [
    { id: 1, img: '/img/image 1 (1).png', title: 'Syltherine', subtitle: 'Stylish cafe chair', button: 'Удалить!'},
    { id: 2, img: '/img/image 2.png', title: 'Leviosa', subtitle: 'Stylish cafe chair', button: 'Удалить!'},
    { id: 3, img: '/img/image 3.png', title: 'Lolito', subtitle: 'Luxury big sofa' , button: 'Удалить!'},
    { id: 4, img: '/img/image 4.png', title: 'Respira', subtitle: 'Minimalist fan', button: 'Удалить!'},
    { id: 5, img: '/img/image 9.png', title: 'Grifo', subtitle: 'Night lamp', button: 'Удалить!'},
    { id: 6, img: '/img/image 6.png', title: 'Muggo', subtitle: 'Small mug', button: 'Удалить!'},
    { id: 7, img: '/img/image 7.png', title: 'Pingky', subtitle: 'Cute bed set', button: 'Удалить!'},
    { id: 8, img: '/img/image 8.png', title: 'Potty', subtitle: 'Minimalist flower pot' , button: 'Удалить!'}
]

let row = document.querySelector('.row')

const addCardsInRow = () => {
    base.forEach((item) => {
        row.innerHTML += `<div class="card" id='${item.id}'>
        <img class="card__img" src='./${item.img}' alt="${item.subtitle}">
        <h2 class="card__title">${item.title}</h2>
        <p class='card__subtitle'>${item.subtitle}</p>
        <button class="btn">${item.button}</button>
        </div>`
    })
}
addCardsInRow()
