const urlLink = "https://ww6.mangakakalot.tv"
const httpReq = require("request-promise")
const cheerio = require("cheerio")

const pagesValidation = (req, res, next) => {

    req.query.page = Number(req.query.page) ? req.query.page : 1

    const type = req.query.type.replace("Top read", "topview").toLowerCase()
    const state = req.query.state
    const categoryId = req.metaData.category.filter((val)=> {return val.name === req.query.category})[0].id
    httpReq(`${urlLink}/manga_list?type=${type}&category=${categoryId}&state=${state}&page=99999999`)
        .then((html) => {

            const $ = cheerio.load(html)
            const totalStories = $(".panel_page_number .group_qty .page_blue").text().match(/Total:\s*([\d,]+)\s+stories/)[1]
            const totalPages = $(".panel_page_number .group_page .page_last").text().match(/Last\((\d+)\)/) 
            
            req.metaData = {
                totalStories: Number(totalStories.replace(",", "")) ,
                totalPages: totalPages ? Number(totalPages[1]) : $(".panel_page_number .group_page .page_last").text(),
                ...req.metaData
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