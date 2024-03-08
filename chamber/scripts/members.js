const baseURL = "https://nameerfdt.github.io/wdd230/chamber";
const membersURL = "https://nameerfdt.github.io/wdd230/chamber/data/members.json";

async function getMemberData() {
    const response = await fetch(membersURL);
    const data = await response.json();
    // console.table(data.members);
    displayMembers(data.members);
}
    getMemberData();

const memberCards = document.getElementById('memberCards');

const displayMembers = (members) => {

    members.forEach((member) => {
        const card = document.createElement('section');
        const businessName = document.createElement('h3');
        const address = document.createElement('p');
        const phone = document.createElement('p');
        const website = document.createElement('a');

        const membership_level = document.createElement('p');
        const other_information = document.createElement('p');
        const logo = document.createElement('img');

        logo.setAttribute('src', member.image);
        logo.setAttribute('loading', 'lazy');
        logo.setAttribute('width', '200');
        logo.setAttribute('width', '200');
        businessName.textContent = `${member.name}`;
        address.textContent = `${member.address}`;
        phone.textContent = `${member.phone}`;
        website.textContent = `${member.website}`;
        membership_level.textContent = `${member.membership_level}`;
        other_information.textContent = `${member.other_information}`;
        
        card.appendChild(logo);
        card.appendChild(businessName);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(website);
        card.appendChild(membership_level);
        card.appendChild(other_information);
        
        

    memberCards.appendChild(card);
    });
    
}

