const dataCollector = require("../middleware/mangaList/dataCollectorMiddleware")
const dataValidation = require("../middleware/mangaList/dataValidationMiddleware")
const pageValidation = require("../middleware/mangaList/pageValidationMiddleware")
const mangaListController = require("../controllers/ListMangaController")

const mangaList = require("express").Router()

mangaList.get("/",
    dataCollector,
    dataValidation,
    pageValidation,
    mangaListController
)

module.exports = mangaList