import { items } from '../data/accraitems.mjs'



function displayplaces(items){
    const placescontainer = document.querySelector('.places')
    placescontainer.innerHTML = ''
    items.forEach(item => {
        const itemContainer = document.createElement('div')
        itemContainer.classList.add('itemCard')
        const itemImage = document.createElement('img')
        itemImage.src = item.image
        itemImage.alt = item.name
        itemContainer.appendChild(itemImage)
        const itemTitle = document.createElement('h2')
        itemTitle.textContent = item.name
        itemContainer.appendChild(itemTitle)
        const itemAddress = document.createElement('address')
        itemAddress.textContent = item.address
        itemContainer.appendChild(itemAddress)
        const itemDesc = document.createElement('p')
        itemDesc.textContent = item.description
        itemContainer.appendChild(itemDesc)
        const lbutton = document.createElement('button')
        lbutton.classList.add('lbutton')
        lbutton.textContent = 'Learn More'
        itemContainer.appendChild(lbutton)
        placescontainer.appendChild(itemContainer)
    });
}

displayplaces(items)


const today = Date.now()
const visitMessage = document.querySelector("#visitmessage")
const lastVisit = localStorage.getItem('lastVisit')
if(lastVisit===null){
    visitMessage.textContent = "Welcome! Let us know if you have any questions."
}else{
     const lastVisitTime = Number(lastVisit)
     const diffTime = today - lastVisitTime
     const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24))
     if (diffDays === 0) {
        visitMessage.textContent = "Back so soon! Awesome!";
    } else if (diffDays === 1) {
        visitMessage.textContent = "You last visited 1 day ago.";
    } else {
        visitMessage.textContent = `You last visited ${diffDays} days ago.`;
    }

}

localStorage.setItem("lastVisit", today);


