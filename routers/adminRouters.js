const {Router} = require('express')

const {
    getHome,
    getShop,
    getAbout,
    getReview,
    getContact,
    getBlog
} = require('../controls/adminControls')

const router = Router()

router.get('/home', getHome)
router.get('/shop', getShop)
router.get('/about', getAbout)
router.get('/review', getReview)
router.get('/contact', getContact)
router.get('/blog', getBlog)

module.exports = router