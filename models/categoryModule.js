const mongoose = require('mongoose')

const Categories = new mongoose.Schema(
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
        created_at: {
            type: Date,
            default: Date.now()
        } 
    }
)

module.exports = mongoose.model('Categories', Categories)