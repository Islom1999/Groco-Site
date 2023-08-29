const mongoose = require('mongoose')

const Gallaries = new mongoose.Schema(
    {
        image: {
            type: "string", 
            required: true, 
        },
        created_at: {
            type: Date,
            default: Date.now()
        } 
    }
)

module.exports = mongoose.model('Gallaries', Gallaries)