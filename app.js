const express = require('express');
const bodyParser = require('body-parser');
const res = require('express/lib/response');
const userController = require('./controllers/userController');
// const crudOperations = require('./controllers/userController');

require('./models/index');

console.log(userController.addUser);
console.log(userController.crudOperations);
// console.log(addUser.addUser)
// console.log(crudOperations)


const userCtrl = require('./controllers/userController');

const app = express();
// app.use(bodyParser)
app.use(  bodyParser.urlencoded({    extended: false  }));
app.use(bodyParser.json())
const port = 3000;

app.get('/', (req,res) => {
    res.send('hey this is rahul mahajan');
})

app.get('/add', userController.addUser);
app.get('/crud', userController.crudOperations);
app.get('/transaction', userController.transactionsRoute);
app.get('/hooks',userController.hooks)

app.post('/abc', (req,res) => {
    // console.log(req)
    const username = req.body.username

    console.log(username);
    res.send(username)
})

app.listen(port, () => {
    console.log(`app is running on port ${port}`);
})