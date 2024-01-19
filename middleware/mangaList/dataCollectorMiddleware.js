const httpReq = require("request-promise")
const url = require('url')
const cheerio = require("cheerio")
const urlLink = "https://ww6.mangakakalot.tv"

const dataCollector = (req, res, next) => {

    httpReq(`${urlLink}/manga_list?type=latest&category=None&state=None&page=1000000`)
        .then((html) => {


            const $ = cheerio.load(html)
            const category = []
            const type = []
            const state = []

            $(".truyen-list .tag:eq(0) li a").map((index, val) => {

                const target = $(val)

                const id = url.parse(target.attr("href"), true).query.category

                category[index] = {
                    id: id,
                    name: target.text()
                }
            })

            $(".truyen-list .tag:eq(1) li a").map((index, val) => {


                const target = $(val)
                const id = url.parse(target.attr("href"), true).query.type

                type[index] = {
                    id: id,
                    name: target.text()
                }
            })

            $(".truyen-list .tag:eq(2) li a").map((index, val) => {

                const target = $(val)
                const id = url.parse(target.attr("href"), true).query.state

                state[index] = {
                    id: id,
                    name: target.text()
                }
            })

            req.metaData = {
                type: type,
                state: state,
                category: category
            }

            next()
        })
        .catch((e) => {
            res.status(500).json({ error: e })
        })
}


module.exports = dataCollector