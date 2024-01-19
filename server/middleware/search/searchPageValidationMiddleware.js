const urlLink = "https://ww6.mangakakalot.tv"
const httpReq = require("request-promise")
const cheerio = require("cheerio")

const pagesValidation = (req, res, next) => {

    req.query.page = Number(req.query.page) ? req.query.page : 1

    httpReq(`${urlLink}/search/${req.params.id}`)
        .then((html) => {

            const $ = cheerio.load(html)
            const totalPages = $(".panel_page_number .group_page .page_last").text().match(/Last\((\d+)\)/) 
            
            req.metaData = {
                totalPages: totalPages ? Number(totalPages[1]) : $(".panel_page_number .group_page .page_last").text(),
            }
            
            req.query.page = req.query.page > 0 ? req.query.page : 1
            req.query.page = req.query.page <= req.metaData.totalPages ? req.query.page : req.metaData.totalPages

            next()
        })
        .catch((e) => {

            res.status(500).json({ error: e })
        })
}

module.exports = pagesValidation