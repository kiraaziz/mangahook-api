const cheerio = require("cheerio")

const mangaController = (req, res) => {

    const $ = cheerio.load(req.html)
    const target = $(".manga-info-top")

    const metaData = {
        imageUrl: "https://ww6.mangakakalot.tv/" + target.find(".manga-info-pic img").attr("src"),
        name: target.find(".manga-info-text li:eq(0) h1").text(),
        author: target.find(".manga-info-text li:eq(1) a").text(),
        status: target.find(".manga-info-text li:eq(2)").text().split(":")[1].trim(),
        updated: target.find(".manga-info-text li:eq(3)").text().split(":")[1].trim(),
        view: target.find(".manga-info-text li:eq(5)").text().split(":")[1].trim(),
        genres: target.find(".manga-info-text li:eq(6)").text().split(":")[1].trim().split(",").map((val)=>{
            return (val.trim())
        }).filter((val)=> { return val }),
    }
    res.json({
        ...metaData,
        chapterList: req.chapterList
    })
}

module.exports = mangaController