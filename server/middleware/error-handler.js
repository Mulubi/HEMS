const errorHandlerMiddleware = (err,req, res, next) => {
    console.log(err);
    if (res.headersSent) {
        return next(err);
    }
    res.status(500).json({ error: 'Internal Server Error'});
};

export default errorHandlerMiddleware;