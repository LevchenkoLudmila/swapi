const quetion = document.querySelector('[data-name="quetion"]');
console.log(quetion);

quetion.addEventListener('click', async () =>{
    // const answer = await Promise.all([
    // axios.get('https://swapi.dev/api/planets/3/'),
    // axios.get('https://swapi.dev/api/starships/9/'),
// ]);

    const ansver = [];
    ansver[0] = await axios.get('https://swapi.dev/api/planets/3/');
    ansver[1] = await axios.get('https://swapi.dev/api/starships/9/');

    const vievAnswer = document.querySelector('.forum');
    vievAnswer.innerHTML = `${ansver[0].data.name}, ${ansver[1].data.name}`;
});