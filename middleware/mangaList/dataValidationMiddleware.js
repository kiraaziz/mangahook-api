const dataValidation = (req, res, next) => {

    ["category", "type", "state"].map((val) => {

        const test = (req.query[val] && req.metaData[val].map((value) => { return value.name }).includes(req.query[val]))
        req.query[val] = test ? req.query[val] : req.metaData[val][0].name
    })

    next()
}

module.exports = dataValidation