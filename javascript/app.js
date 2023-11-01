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
                <button>saiba mais</button>
            </td>
        </tr>
        `
    }
    tableBody.innerHTML = linhas


}

updateTable()