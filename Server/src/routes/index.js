const {Router} = require("express")
const getChardById = require("../controllers/getCharById")
const login = require("../controllers/login")
const { postFav, deleteFav} = require("../controllers/handleFavorites")


const router = Router();

router.get("/character/:id", getChardById)
router.get("/login", login)
router.post("/fav", postFav)
router.delete("/fav/:id", deleteFav)

module.exports = router;