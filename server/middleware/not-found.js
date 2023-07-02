// const notFound = (req, res) =>
// res.status(404).send('Route does not exist, check your request params');

// export default notFound;

const notFound = (req, res) => {
    res.type('text/plain')
    res.status(404)
    res.send('404 - Not Found!')
}

export default notFound;