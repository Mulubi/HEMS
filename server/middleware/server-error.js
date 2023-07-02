const serverError = (req, res) => {
    res.type('text/plain')
    res.status(500)
    res.send('500 - Server Error!')
}

export default serverError;