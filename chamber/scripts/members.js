const baseURL = "https://nameerfdt.github.io/wdd230/chamber";
const membersURL = "https://nameerfdt.github.io/wdd230/chamber/data/members.json";

async function getMemberData() {
    const response = await fetch(membersURL);
    const data = await response.json();
    // console.table(data.members);
    displayMembers(data.members);
}
    getMemberData();