
function searchDoggos() {
    let breed = document.getElementById('searchBar').value;
    console.log(`Searching for breed: ${breed}`);

    // La API de dog.ceo espera razas compuestas invertidas y separadas por '/'
    // (ej: "golden retriever" -> "retriever/golden"), así que separamos
    // el input en palabras para poder detectar y transformar ese caso.
    breedEndpoint = breed.split(' ');

    // Si el usuario no escribió nada, mostramos un mensaje y detenemos
    // la función aquí para no hacer una llamada innecesaria a la API.
    if (breed === '') {
        document.getElementById('doggoContainer').innerHTML = `
        <p>Please enter a breed to search for.</p>`;
        return;
    }

    // Si hay más de una palabra, es una raza compuesta: invertimos el
    // orden de las palabras y las unimos con '/' para armar el endpoint.
    if (breedEndpoint.length > 1) {
        breedEndpoint.reverse();
        breedEndpoint = breedEndpoint.join('/');
        console.log('endpoint: ' + breedEndpoint);
    }
    
    let url = `https://dog.ceo/api/breed/${breedEndpoint}/images/random/12`;
    const container = document.getElementById('doggoContainer');
    
    fetch(url)
    .then((response) => {
        // fetch() NO rechaza la promesa ante errores HTTP (como 404),
        // solo ante errores de red. Por eso validamos response.ok
        // manualmente y lanzamos el error nosotros mismos para que
        // la ejecución salte al .catch() de más abajo.
        if (!response.ok) {
            throw new Error('Dog breed not found');
        } else {
            return response.json();
        }
    })
    .then(data => {
        const doggos = data.message;
        console.log(doggos);
        container.innerHTML = `
            <h3 >${breed.charAt(0).toUpperCase() + breed.slice(1)}</h3>
        `;
        // Por cada URL de imagen, creamos una tarjeta (card) individual
        // y la agregamos al contenedor
        doggos.forEach((dog) => {
            const card = document.createElement('div');
            card.className = 'card';
            card.innerHTML = `
            <img src="${dog}" alt="${breed.charAt(0).toUpperCase() + breed.slice(1)} Image" max-width="500%" />
            <h4>Breed: ${breedEndpoint.split('/')[0].charAt(0).toUpperCase() + breedEndpoint.split('/')[0].slice(1)}</h4>
            <p>Sub-breed: ${breedEndpoint.split('/')[1] || 'None'}</p>
            `;
            container.appendChild(card);
        });
        
            
    })
    .catch((error) => {
        // Manejamos aquí, tanto los errores de red como el error que 
        // lanzamos manualmente arriba (raza no encontrada).
        console.error('Error fetching doggos:', error);
        document.getElementById('doggoContainer').innerHTML = `
        <p>I'm sorry, we couldn't find any dogs of that breed.</p>
        <img src="./resources/sad-dog-rainy-dog.png" alt="Dog not found" />
        <p>Try searching for another breed or check the spelling.</p>
        `;
    });
}