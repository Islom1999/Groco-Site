const {Router} = require("express")

const router = Router()

router.post('/uz', async (req, res) => {
    req.session.lang = 'uz'
    res.redirect('/')
})


router.post('/eng', async (req, res) => {
    req.session.lang = 'eng'
    res.redirect('/')
})

module.exports = router