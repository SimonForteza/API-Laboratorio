const btnGetUsers = document.getElementById("btnGetUsers");
const btnPagina1 = document.getElementById("btnPagina1");
const btnPagina2 = document.getElementById("btnPagina2");

async function getData(page) {
    try {
        const resp = await fetch(`https://reqres.in/api/users?page=${page}`);
        if (!resp.ok) {
            throw new Error("Error en la solicitud");
        }

        const data = await resp.json();
        return data;

    } catch (error) {
        console.log("Hubo un error", error);
    }
}


function renderUsers(data) {
    const users = data.data;
    let rows = '';

    for (let user of users) {
        //todo el html creaddo
        rows += `    
        <tr>
            <td>${user.id}</td>
            <td>${user.first_name}</td>
            <td>${user.last_name}</td>
            <td>${user.email}</td>
            <td>
                <img src="${user.avatar}">
            </td>
        </tr>
        `;
    }
    document.getElementById("usersRows").innerHTML = rows;
}

async function getUsers(page) {
    const data = await getData(page);
    if (data) {
        renderUsers(data);
    }
}


//evento del primer boton
btnGetUsers.addEventListener("click", () => {
    getUsers(1);
});

btnPagina1.addEventListener("click", () => {
    getUsers(1);
});

btnPagina2.addEventListener("click", () => {
    getUsers(2);
});

