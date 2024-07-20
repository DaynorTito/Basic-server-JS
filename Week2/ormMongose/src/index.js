import { initDb } from './config/db.js';
import { initServer } from './app.js';
const port = 3000;

// init database configuration
// .env 

//top level async  is not available in all Node versions

(async () => {
    await initDb();
    // start server
    initServer(port);
})();

// create a model for a user

//      created in model folder

// midleware

//      is in app file now



//midleware error handling


//start server in app file
