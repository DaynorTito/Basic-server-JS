// export const createPerson = (req, res, next) => {
//     const body = req.body;
//     const person = {
//         name: body.name,
//         age: body.age
//     };
//     people.push(person);
//     res.json(body);
// };

const people = [];
export const createPerson = ({age, name}) => {
    const person = {
        name,
        age
    };
    people.push(person);
    return person;
};