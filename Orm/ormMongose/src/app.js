import express from 'express'
import router from './routes/routes.js';
//Middleware

export function initServer(port) {
    const app = express();
    app.use(express.json());
    app.use(router);
 //   app.use(errorHandler);
    app.listen(port, ()=> {
        console.log(`Server listenig on port ${port}`);
    });
}