const mongoose = require('mongoose')

const Sliders = new mongoose.Schema(
    {
        image: {
            type: "string", 
            required: true, 
        },
        imageBanner: {
            type: "string", 
            required: true, 
        },
        titleUz: {
            type: "string", 
            required: true, 
        },
        titleEng: {
            type: "string", 
            required: true, 
        },
        discountUz: {
            type: "string", 
            required: true,
        },
        discountEng: {
            type: "string", 
            required: true,
        },
        isActiveClass: {
            type: "string", 
        },
        created_at: {
            type: Date,
            default: Date.now()
        } 
    }
)

module.exports = mongoose.model('Sliders', Sliders)