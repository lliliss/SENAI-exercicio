async function getUsers() {
    const resp = await fetch("https://jsonplaceholder.typicode.com/users")
    const  users = await resp.json()

    return users;
}

async function updateTable() {
    let tableBody = document.querySelector(".js-user-line")
    let users = await getUsers()
    let linhas = " "

    for(let user of users) {
        linhas += `
        <tr>
            <td>${user.name}</td>
            <td>${user.username}</td>
            <td>${user.email}</td>
            <td>
                <button onclick="userDetails ($(user.id))">saiba mais</button>
            </td>
        </tr>
        `
    }
    tableBody.innerHTML = linhas

}

async function userDetails(userID) {
    const resp = await fetch(`https://jsonplaceholder.typicode.com/users/${userID}`)
    const user = await resp.json();

    document.querySelector(".js-users-1").innerHTML = `${user.phone}`
    document.querySelector(".js-users-1").innerHTML = `${user.website}`
    document.querySelector(".js-users-1").innerHTML = `${user.address.street}`, `${user.address.city}`, `${user.address.zipcode}`
    document.querySelector(".js-users-1").innerHTML = `${user.company.name}`
    
}

async function getTips(){
    const resp = await fetch("https://api.adviceslip.com/advice")
    const tip = await resp.json

    document.querySelector(".tips").innerText = tip.slip.advice


}

updateTable()
updateDetails()

segInterval(()=> {
    getTips()
}, 5000)