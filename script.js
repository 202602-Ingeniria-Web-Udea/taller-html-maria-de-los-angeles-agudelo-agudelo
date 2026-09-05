
function searchDoggos() {
    let breed = document.getElementById('searchBar').value;
    console.log(`Searching for breed: ${breed}`);
    breedEndpoint = breed.split(' ');

    if (breed === '') {
        document.getElementById('doggoContainer').innerHTML = `
        <p>Please enter a breed to search for.</p>`;
        return;
    }

    if (breedEndpoint.length > 1) {
        breedEndpoint.reverse();
        breedEndpoint = breedEndpoint.join('/');
        console.log('endpoint: ' + breedEndpoint);
    }
    
    let url = `https://dog.ceo/api/breed/${breedEndpoint}/images/random/10`;
    const container = document.getElementById('doggoContainer');
    
    fetch(url)
    .then((response) => {
        if (!response.ok) {
            document.getElementById('doggoContainer').innerHTML = `
            <p>I'm sorry, we couldn't find any dogs of that breed.</p>
            <img src="./resources/sad-dog-rainy-dog.png" alt="Dog not found" />
            <p>Try searching for another breed or check the spelling.</p>
            `;
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
        doggos.forEach((dog) => {
            const card = document.createElement('div');
            card.className = 'card';
            card.innerHTML = `
            <img src="${dog}" alt="${breed.charAt(0).toUpperCase() + breed.slice(1)} Image" max-width="500%" />`;
            container.appendChild(card);
        });
        
            
    })
        .catch((error) => {
        console.error('Error al obtener los datos de los perritos:', error);
        document.getElementById('doggoContainer').innerHTML = `
            <p>Something went wrong while fetching the doggos.</p>`;
    });
}