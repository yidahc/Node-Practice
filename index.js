const request = require ('request');

POKEURL= 'https://pokeapi.co/api/v2';

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

 getPokeById(7);
