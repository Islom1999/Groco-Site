const mongoose = require('mongoose')

const Products = new mongoose.Schema(
    {
        image: {
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
        amount: {
            type: "number", 
            required: true,
        },
        star: {
            type: "number",
        },
        created_at: {
            type: Date,
            default: Date.now()
        } 
    }
)

module.exports = mongoose.model('Products', Products)