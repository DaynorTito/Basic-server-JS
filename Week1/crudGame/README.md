

# CRUD Game

## Objective
Create a backend using Node.js and Express for game data. Implementing basic CRUD (Create, Read, Update and Delete) operations to manage game data, including middleware for error handling.

## Technologies Used
- Node.js
- Express
- MySQL
- Sequelize (ORM)

## Project Structure

```bash
assignmetWeek/
├── node_modules/
├── src/
│   ├── controllers/
│   │   └── gameController.js
│   ├── middlewares/
│   │   └── errorMiddleware.js
│   ├── models/
│   │   └── index.js
│   │   └── game.js
│   ├── routes/
│   │   └── gameRoutes.js
│   ├── app.js
│   └── server.js
├── .env
├── .gitignore
├── package.json
└── README.md
```

## Configurtion's project

### Requierements
- Node.js
- MySQL
- npm

### Installations
1. Clone repository:
   ```bash
   git clone https://github.com/DaynorTito/Basic-server-JS.git
   ```
2. Install dependences:

   ```bash
    npm install
   ```

### Database Configuration

The connection to the MySQL database is done through Sequelize, configured in src/models/game.js.

## API Paths
### POST /game
Creates a new game. A JSON body with the game data is expected.


#### Input JSON

```json
{
  "name": "Mario Card",
  "description": "An exciting game",
  "genre": "Adventure",
  "platform": "Switch"
}
```

#### Response JSON
```json

{
  "id": 1,
  "name": "My Game",
  "description": "An exciting game",
  "genre": "Adventure",
  "platform": "PC"
}

```
### GET /game/:id
Gets the details of a specific game by its ID.

#### Output JSON
```json
{
  "id": 1,
  "name": "Mario Card",
  "description": "An exciting game",
  "genre": "Adventure",
  "platform": "Switch"
}
```

### PUT /game/
Updates the data of an existing game by its ID.

#### Input JSON
```json
{
  "name": "Updated Game",
  "description": "An updated game",
  "genre": "Adventure",
  "platform": "Mobile"
}
```
#### Output JSON

```json
{
  "id": 1,
  "name": "Updated Game",
  "description": "An updated and exciting game",
  "genre": "Racing",
  "platform": "Mobile"
}

```

### DELETE /game/

Deletes a specific game by its ID.

Expected Status Code
```bash
    204 - No Content (No JSON output expected)
```

### PATCH /game/
Partially updates the data of a game by its ID.

#### Input JSON

```json

{
  "description": "An updated game"
}

```
#### JSON Output after PATCH
```json

{
  "id": 1,
  "name": "Updated Game",
  "description": "An updated game",
  "genre": "Adventure",
  "platform": "PC"
}

```

## Middleware
Middleware has been implemented to handle errors in case any problems occur during route execution. This middleware is located in src/middlewares/errorMiddleware.js.

## Running the Server
To run the server, use the following command:

```bash
node src/server.js
```
The server will be available at http://localhost:3000
