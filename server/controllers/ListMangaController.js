const httpReq = require("request-promise")
const cheerio = require("cheerio")
const urlLink = "https://ww6.mangakakalot.tv"

const ListManga = (req, res) => {

    const categoryId = req.metaData.category.filter((val) => { return val.name === req.query.category })[0].id
    const page = req.query.page
    const type = req.query.type.replace("Top read", "topview").toLowerCase()
    const state = req.query.state

    const query = `?type=${type}&category=${categoryId}&state=${state}&page=${page}`
    const url = `${urlLink}/manga_list${query}`

    console.log(url)

    httpReq(url)
        .then((html) => {

            const $ = cheerio.load(html)
            const mangaList = []

            $(".truyen-list .list-truyen-item-wrap").map((index, val) => {

                const target = $(val)
                mangaList[index] = {
                    id: target.find("a:first").attr("href").split("/")[2].trim(),
                    image: urlLink + target.find("a:first img").attr("data-src"),
                    title: target.find("h3 a").text(),
                    chapter: target.find(".list-story-item-wrap-chapter").text() ,
                    view: target.find(".aye_icon").text(),
                    description: target.find("p").text().replace("More.\n", " ... \n").trim()
                }
            })
            
            res.json({
                mangaList: [...mangaList],
                metaData: req.metaData,
            })
        })
        .catch((e) => {
            res.status(500).json({ error: e })
        })
}

module.exports = ListManga