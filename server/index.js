express = require ('express')

app = express();
app.use(express.json()); // middlewear converting the requests into something we can now access without needing body-parser
const port = process.env.PORT || 3000;

require('dotenv').config();

const mongoose = require('mongoose');

mongoose.connect(process.env.MongoUrl, {useNewUrlParser: true}, (err) => {
    if(err) throw err;
    console.log("Mongo Conectado correctamente");
});

const { newTienda, getTiendas,  getTienda } = require('./controlers/tiendas.js');
const { newCategoria, getCategorias } = require('./controlers/categorias.js');
const { newMarca, getMarcas } = require('./controlers/marcas.js');
const { newArticulo, getArticulos, getArticulo } = require('./controlers/articulos.js');

app.get('/', (req, res) => res.status(200).send('<h1>Hello Thor</h1>'))

app.get('/new/usuario', (req, res) => {
    res.status(200).send('<h1>Register</h1>')
}) 

app.post('/new/usuario', (req, res) => {
    console.log(req.body); // we access the body of the request
    user = req.body.user;
    res.json({user:{ // params accesses the parameters in the url request (after the : in a get request url)
        user,
    }})
})  

app.get('/usuario/:id', (req, res) => {
  console.log (req.params.id);
  res.status(200).json({id: req.params.id})  
})

app.get('/tiendas', getTiendas);
app.post('/new/tienda', newTienda);

app.get('/categorias', getCategorias);
app.post('/new/categoria', newCategoria);

app.get('/marcas', getMarcas);
app.post('/new/marca', newMarca);

app.get('/articulos', getArticulos);
app.post('/new/articulo', newArticulo);

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

// http is the protocol that we use for requests, which involves get/post, etc
// 200 was succesfully retrieved or found 
// 201 was succesfully created (for a succesful post)
// 400 bad request
// 401 unauthorized (must be authenticated. has not logged on)
// 404 not found
// 405 method not allowed (the methid being used did exist but has now been disabled)
// 403 forbidden (can not be authorized. you are not an authorized user or you have not paid. or your IP is not whitelisted)
// 500 internal server error
// 502 bad gateway (headers or tokens needed)
// 503 server error (the server does not know what to do with this error, but it does not have to be an issue with your path or request)
// 505 http version not supported