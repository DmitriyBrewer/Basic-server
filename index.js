const express = require('express')
const data = require('./data')
const PORT = 5000;
const app = express() 

//req(request), res(response) 
//middleware
function cors(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, PATCH, POST, DELETE");
    res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
    next();
}
//middleware
app.use(cors)
app.use(express.text())
app.use('/static', express.static(__dirname + 'public'))
app.get('/', (req,res)=>{ 
    console.log(req.body); 
    const product = data
        
    
    
    res.status(200).json(product) 

//Или 
       // res.send('Hello World!') 
}) 
app.listen(PORT, ()=> console.log('Server Starter on PORT ' + PORT )) 