const request = require ('request');

POKEURL= 'https://pokeapi.co/api/v2';
SWURL= 'https://swapi.co/api';

const getPokeById = id => {
    request.get(`${POKEURL}/pokemon/${id}/`, (error, response, body) => {
        const Pokemon = JSON.parse(body);
        console.log(`My name is ${Pokemon.name} and these are all my moves:`)
        
      //  for (let key in Pokemon.moves) {
      //      console.log (Pokemon.moves[key].move.name);
      //  }
        
        const map1 = Pokemon.moves.map(x => x.move.name);
         console.log(map1);
         
        // console.log(Pokemon.moves);
        // console.log(response.statusCode)
       //  console.log(response)  <-- this would also include the headers and other information the server is sending back, 
        // console.log(response.body) this is why we always use response.body
    })
};


const getPeopleMovies = id => {
    request.get(`${SWURL}/people/${id}/`, (error, response, body) => {
        const person = JSON.parse(body);
        console.log(`My name is ${person.name} and these are the movies I appear in`);
        person.films.map (film => {
            return new Promise ((res, rej) => {
                request.get(film, (error, response, body) => {
                    const film = JSON.parse(body);
                    res(film.title);
                });
            })
        });
    });
};

/*
Promise.allSettled(urls.map(url => fetch(url)))
  .then(results => { // (*)
    results.forEach((result, num) => {
      if (result.status == "fulfilled") {
        alert(`${urls[num]}: ${result.value.status}`);
      }
      if (result.status == "rejected") {
        alert(`${urls[num]}: ${result.reason}`);
      }
    });
  });
*/
//getPokeById(7);

getPeopleMovies(13).then(movies => console.log(movies))
