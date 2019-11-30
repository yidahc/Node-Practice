const request = require ('request');

const URL_BASE = 'https://goodreads-devf-aaron.herokuapp.com/api/v1';

/*
const promise = new Promise ((resolve, reject) => {
    const number = Math.floor(Math.random() * 10);

    setTimeout (
        () => number > 5 ? resolve (number) : resolve (new Error('Menor a 5')),1000);
});

promise
    .then (number => console.log(number))
    .catch (error => console.log(error))

*/

function crearAuthor(nombre, apellidos, nacionalidad, biografia, genero, edad) {

    const URI = 'authors/';
    let URL_FINAL = `${URL_BASE}/${URI}`;

    var jsonSend = {
        'name': nombre,
        'last_name': apellidos,
        'nacionalidad': nacionalidad,
        'biography': biografia,
        'gender': genero,
        'age': edad,

    }

    return new Promise ((res, rej) => {
        request.post({ url: URL_FINAL, form: jsonSend}, (err, response, body) => {
            let json = JSON.parse(body);
            response.statusCode == 201 ? res(json) : rej('Error al crear un nuevo autor'); // 201 is for succesful posts
        });
    });

}
/*
crearAuthor('Yidah','Curiel','MX','biografia','F',25)
    .then(nuevoAutor => console.log(nuevoAutor))
    .catch(error => console.log(error))
*/

function buscarAutor (id) {
    const URL_FINAL = `${URL_BASE}/authors/${id}/`;

    return new Promise ((res, rej) => {
        request.get(URL_FINAL, (err, response, body) => {
            let json = JSON.parse(body);
            response.statusCode === 200 ? res(json) : rej('Error al buscar un autor'); // 200 is for succesful gets
        });
    });
}
/*
buscarAutor(331)
    .then(resultoAutor => console.log(resultoAutor))
    .catch(error => console.log(error))
*/

function returnName() {
    const mascotas = [
        { nombre: "Bimbo",    especie: "Hamster", comidasFavoritas: ["Semillas", "Nueces"] },
        { nombre: "Ludovico", especie: "Perro",   comidasFavoritas: ["Huesos", "Jamon"] },
        { nombre: "Pavlov",   especie: "Perro",   comidasFavoritas: ["Croquetas", "Pollo"] },
        { nombre: "Chancla",  especie: "Gato",    comidasFavoritas: ["Atun", "Pescado"] },
        { nombre: "Don Pepe", especie: "Perico",  comidasFavoritas: ["Semillas"] }
    ];

    let nombres = mascotas.map(mascota => mascota.nombre)
    console.log(nombres)
}

returnName();