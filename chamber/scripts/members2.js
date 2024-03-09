
const baseURL = "https://nameerfdt.github.io/wdd230/chamber";
const membersURL = "https://nameerfdt.github.io/wdd230/chamber/data/members.json";

async function getMemberData() {
    const response = await fetch(membersURL);
    const data = await response.json();
    // console.table(data.members);
    displayMembers(data.members);
}
    getMemberData();

const memberCards = document.querySelector('.grid');

const displayMembers = (members) => {

    members.forEach((member) => {
        const card = document.createElement('section');
        card.classList.add('sections');
        const businessName = document.createElement('h3');
        const address = document.createElement('p');
        const city_state = document.createElement('p');
        const phone = document.createElement('p');

        const website = document.createElement('a');
        website.setAttribute('href',member.website);
        website.setAttribute('target', '_blank');

        const membership_level = document.createElement('p');
        const description = document.createElement('p');

        const lg_logo = document.createElement('img');
        lg_logo.setAttribute('src', member.lg_image);
        lg_logo.setAttribute('loading', 'lazy');
        lg_logo.setAttribute('width', '200');
        lg_logo.setAttribute('width', '200');

        const sm_logo = document.createElement('img');
        sm_logo.setAttribute('src', member.sm_image);
        sm_logo.setAttribute('loading', 'lazy');
        sm_logo.setAttribute('width', '100');
        sm_logo.setAttribute('width', '100');

        businessName.textContent = `${member.name}`;
        // businessName.style.setProperty('color', 'black');
        address.textContent = `${member.address}`;
        city_state.textContent = `${member.city_state}`;
        phone.textContent = `${member.phone}`;
        website.textContent = `${member.website}`;
        membership_level.textContent = `Membership Level: ${member.membership_level}`;
        description.textContent = `${member.description}`;
        
        card.appendChild(lg_logo);
        card.appendChild(sm_logo);
        card.appendChild(businessName);
        card.appendChild(address);
        card.appendChild(city_state);
        card.appendChild(phone);
        card.appendChild(website);
        card.appendChild(membership_level);
        card.appendChild(description);
        
        memberCards.appendChild(card);
    });
    
}

