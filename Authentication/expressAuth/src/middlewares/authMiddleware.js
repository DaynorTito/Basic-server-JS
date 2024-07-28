

// const addMiddleware = async(res, req, next) => {
//     const token = req.headers['authorization'];
//     if (!token) {
//         next(UNAUTHENTICADED());

//     }
//     const decodeToken = validateToken(token);
//     if (! decodeToken) throw new Error('Inavlid token');
//     req.user = decodeToken;
//     next();
// }