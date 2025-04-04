
const input = document.getElementById("nombrePokemon");
const btnBuscar = document.getElementById("buscar");
const main = document.getElementById('mainContent');


async function getData(nombre) {
    try {
        let respuesta = await fetch(`https://pokeapi.co/api/v2/pokemon/${nombre}`);
        let datos = await respuesta.json();
        console.log(datos);

        // Obtener tipo de Pokémon
        let tipos = datos.types.map(t => t.type.name).join(" / ");

        return {
            nombre: datos.name.toUpperCase(),
            tipo: tipos,
            imagen: datos.sprites.front_default // Verifica que la imagen exista
        };

    } catch (error) {
        console.error('Error:', error);
    }
}


btnBuscar.addEventListener('click', async () => {
    const nombre = input.value.toLowerCase();
    const data = await getData(nombre);

    // Eliminar tarjetas anteriores antes de agregar una nueva
    main.innerHTML = "";

    const section = document.createElement('section');
    section.classList.add('mb-4');
    section.innerHTML = `
        <div class="row justify-content-center">
            <div class="col-sm-6 col-md-4 col-lg-3">
                <div class="card shadow rounded">
                    <img src="${data.imagen}" class="card-img-top" alt="${data.nombre}">
                    <div class="card-body text-center">
                        <h5 class="card-title">${data.nombre}</h5>
                        <p class="card-text">Tipo: ${data.tipo}</p>
                    </div>
                </div>
            </div>
        </div>
    `;

    main.appendChild(section);
    input.value = "";
});
