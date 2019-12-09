const mongoose = require ('mongoose')

const plateNumberSchema = new mongoose.Schema({

    plateNumber:{
        type: String,
        required: true,
        unique: true
    },

    createdBy: {
        type: String,
        required: true,
    },

    createdOn:{
        type: Date,
        default: Date.now
    }

})

const PlateNumber = mongoose.model('Plate Numbers', plateNumberSchema)

module.exports = PlateNumber