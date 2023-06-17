const errorHandlerMiddleware = (err,req, res, next) => {
    console.error(err);
    if (res.headersSent) {
        return next(err);
    }
    res.status(500).json({ error: 'Internal Server Error'});
};

module.exports = errorHandlerMiddleware;