const cheerio = require("cheerio")

const chapterController = (req, res) => {

    const $ = cheerio.load(req.html)
    const target = $(".trang-doc")

    const assets = {
        title: target.find(".breadcrumb .rdfa-breadcrumb").text().replace("\n", "").trim().split("»").map((val) => {
            return (val.trim())
        }).filter((val) => { return val })[3],
        currentChapter: target.find(".breadcrumb .rdfa-breadcrumb").text().replace("\n", "").trim().split("»").map((val) => {
            return (val.trim())
        }).filter((val) => { return val })[4],
        chapterListIds:
            target.find(".option_wrap #c_chapter option").map(function () {
                return {
                    id: $(this).attr("value"),
                    name: $(this).text()
                }
            }).get()
        ,
        images: target.find(".vung-doc img").map(function () {
            return {
                title: $(this).attr("title"),
                image: $(this).attr("data-src"),
            }
        }).get()
    }

    res.json(assets)
}

module.exports = chapterController

/*
        name: ,
        currentchapter: {
            id: ,
            name: "",
            path: ""
        },
        prevChater: {
            id: "",
            name: "",
            path: ""
        },
        nextChater: {
            id: "",
            name: "",
            path: ""
        },

*/