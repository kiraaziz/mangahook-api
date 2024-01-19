const SearchManga = require("../controllers/searchMangaController")
const pageValidation = require("../middleware/search/searchPageValidationMiddleware")

const mangaSearch = require("express").Router()

mangaSearch.get("/:id",
    pageValidation,
    SearchManga
)

module.exports = mangaSearch