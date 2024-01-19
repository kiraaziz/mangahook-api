const ApiKey = (req, res, next) => {

    const key = 123

    if (false && (Number(req.headers.apikey) !== key) || false) {
        res.status(401).send("401 Unauthorized Access")
    } else {
        next()
    }
}

module.exports = ApiKey