const customError = (statusCode, message) => {
    const error = new Error();
    error.statusCode = statusCode || 500;
    error.message = message || 'Internal server error';
}


const USER_NOT_FOUND = (userName) => {
    return customError(404, `User ${userName} not found`);
}