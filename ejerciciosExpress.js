express = require ('express')

app = express();
app.use(express.json()); // middlewear converting the requests into something we can now access without needing body-parser
const port = process.env.PORT || 3000;


app.get('/api', (req, res) => {
    res.status(200).send({'mensaje':'hola mundo'});

});

// http://localhost:3000/api/suma?num1=4&num2=3 => params for a get request
app.get('/api/suma', (req, res) => { // query = parameters of a request when this is not a post request (posts have bodies)
    let {num1, num2} = req.query; // must be entered in query params section
    resultado = parseInt(num1) + parseInt(num2);
    res.status(200).send({'resultado': resultado})
})

// http://localhost:3000/api/usuario?name=yidah
app.get('/api/usuario', (req, res) => { 
    let {name} = req.query; 
    res.status(200).send({'usuario': name})
})


app.listen(port, () => console.log(`Example app listening on port ${port}!`))
