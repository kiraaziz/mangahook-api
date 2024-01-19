const mangaExist = require("../middleware/manga/mangaExistMiddleware")
const mangaController = require("../controllers/mangaController")
const chapterList = require("../middleware/manga/chapterList")
const chapterController = require("../controllers/chapterController")
const chapterExist = require("../middleware/manga/chapterExistMiddleware")

const manga = require("express").Router()

manga.get("/:id",
    mangaExist,
    chapterList,
    mangaController
)

manga.get("/:id/:ch",
    chapterExist,
    chapterController
)

module.exports = manga