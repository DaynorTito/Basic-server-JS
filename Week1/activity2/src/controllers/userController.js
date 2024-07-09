const users = [
  { id: 1, name: 'John', lastName: 'Doe', age: 28, city: 'New York' },
  { id: 2, name: 'Jane', lastName: 'Smith', age: 34, city: 'Los Angeles' },
  { id: 3, name: 'Bob', lastName: 'Brown', age: 45, city: 'Chicago' },
  { id: 4, name: 'Alice', lastName: 'Johnson', age: 29, city: 'Houston' },
  { id: 5, name: 'Charlie', lastName: 'Davis', age: 38, city: 'Phoenix' }
];

exports.getAllUsers = (req, res) => {
  res.json(users);
};

exports.getUserById = (req, res) => {
  const userId = parseInt(req.params.id);
  const user = users.find(user => user.id === userId);
  if (user) {
    res.json(user);
  } else {
    res.status(404).send('User not found');
  }
};