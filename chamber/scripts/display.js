export let members = []

 export async function fetchdata(){
    const response = await fetch('./data/members.json')
    if (!response.ok){
        throw new Error(`Http Error ${response.status}`);   
    }

    members = await response.json()
    return members 
}

function display(members){
            members.forEach(member=> {
            const memberCard = document.createElement('div')
            memberCard.classList.add("memberCard")

            const companyLogo = document.createElement("img")
            companyLogo.src = member.image
            companyLogo.alt = member.name 
            memberCard.appendChild(companyLogo)
            const name = document.createElement("h3")
            name.textContent = member.name
            memberCard.appendChild(name)
            const address = document.createElement("p")
            address.textContent = `Address: ${member.Address}`
            memberCard.appendChild(address)
            const contact = document.createElement("p")
            contact.textContent = `Contact: ${member.PhoneNumber}`
            memberCard.appendChild(contact)
            const website = document.createElement("p")
            website.textContent = `Website: ${member.Website}`
            memberCard.appendChild(website)
            const service = document.createElement("p")
            service.textContent = `Services: ${member.Service}`
            memberCard.appendChild(service)

            const membersContainer = document.querySelector('.membersContainer')
            membersContainer.appendChild(memberCard)
    })

}

 fetchdata()
    .then(members =>{
        display(members)
    })

    .catch((error) => {
    console.error(`Could not get members: ${error}`);
    })

document.querySelectorAll('#gbutton, #lbutton').forEach(button => {
    button.addEventListener('click', function(event) {
        event.preventDefault();
        display(members);

        if (event.target.id === 'lbutton') {
            const membersContainer = document.querySelector('.membersContainer');
            membersContainer.style.display = "block";
        }
        if (event.target.id === 'gbutton') {
            const membersContainer = document.querySelector('.membersContainer');
            membersContainer.style.display = "grid";
        }
    })
})


