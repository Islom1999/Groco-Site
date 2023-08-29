const mongoose = require('mongoose')

const Workers = new mongoose.Schema(
    {
        image: {
            type: "string", 
            required: true, 
        },
        fullName: {
            type: "string", 
            required: true, 
        },
        workUz: {
            type: "string", 
            required: true, 
        },
        workEng: {
            type: "string", 
            required: true, 
        },
        descrUz: {
            type: "string", 
        },
        descrEng: {
            type: "string", 
        },
        created_at: {
            type: Date,
            default: Date.now()
        } 
    }
)

module.exports = mongoose.model('Workers', Workers)