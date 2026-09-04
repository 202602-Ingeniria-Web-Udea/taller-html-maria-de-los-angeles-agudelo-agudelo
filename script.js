
function searchDoggos() {
    let breed = document.getElementById('searchBar').value;
    console.log(`Searching for breed: ${breed}`);
    let url = `https://dog.ceo/api/breed/${breed}/images/random`;
    const container = document.getElementById('doggoGrid');
    
    fetch(url)
    .then((response) => {
        if (!response.ok) {
            document.getElementById('doggoGrid').innerHTML = '<p>Error al cargar los datos de los perritos jijijij.</p>';
            throw new Error('Dog breed not found');
        } else {
            return response.json();
        }
    })
    .then(data => {
        const doggos = data.message;
        console.log(doggos); 
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <img src="${doggos}" alt="${breed.charAt(0).toUpperCase() + breed.slice(1)} Image" />
            <h3>${breed.charAt(0).toUpperCase() + breed.slice(1)}</h3>`;
        container.appendChild(card);
    })
        .catch((error) => {
        console.error('Error al obtener los datos de los perritos:', error);
        document.getElementById('doggoGrid').innerHTML = '<p>Error al cargar los datos de los perritos.</p>';
    });
}