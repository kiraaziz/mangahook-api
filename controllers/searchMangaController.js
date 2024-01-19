const httpReq = require("request-promise")
const cheerio = require("cheerio")
const urlLink = "https://ww6.mangakakalot.tv"

const SearchManga = (req, res) => {

    const page = req.query.page

    const query = `${req.params.id}?page=${page}`
    const url = `${urlLink}/search/${query}`

    httpReq(url)
        .then((html) => {

            const $ = cheerio.load(html)
            const mangaList = []

            
            $(".panel_story_list .story_item").map((index, val) => {

                const target = $(val)
                mangaList[index] = {
                    id: target.find("a:first").attr("href").split("/")[2].trim(),
                    image: target.find("a:first img").attr("src"),
                    title: target.find("h3 a").text()
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

module.exports = SearchManga