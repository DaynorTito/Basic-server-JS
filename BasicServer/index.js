import express from 'express';
import { createPerson } from './personController.js';
import { validationMiddleware } from './middleware/validations.js';


const app = express();
const port = 3000;
const people = [];

app.use(express.json());

app.use((req, res, next) => {
    console.log(`${req.method} ${req.url} ${JSON.stringify(req.body)}`);
    next();
});

// app.use('/api/person', (req, res, next) => {
//     if (req.body.name == undefined) {
//         console.log('Body must have the name field');
//         res.status(400).send();
//     }
//     if (req.body.age == undefined) {
//         console.log('Body must have the age field');
//         res.status(400).send();
//     }
//     next();
// });

app.use('/api/person', validationMiddleware);

// app.post('/api/person', (req, res, next) => {
//     const body = req.body;
//     const person = {
//         name: body.name,
//         age: body.age
//     };
//     people.push(person);
//     res.json(body);
// });

// app.post('/api/person', (req, res, next) => {
//     const {age, name} = req.body;
//     const person = {
//         name
//         age
//     };
//     people.push(person);
//     res.json(body);
// });

app.post('/api/person', (req, res, next) => {
    const person = createPerson(req.body);
    res.json(person);
});

// app.get('/api/person', (req, res, next) => {

//     const person = {
//         name: "John Doe",
//         age: 22
//     };
//     res.json(people);
// });

app.get('/api/person', (req, res, next) => {
    res.json(people);
});


app.listen(port, () => {
    console.log(`Server is running at port: ${port}`);
});
