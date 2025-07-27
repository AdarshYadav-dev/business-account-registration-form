const mongoose = require('mongoose');

const bussinessSchema = new mongoose.Schema({
    
    // businessinformation
    businessName:{type: String, require: true},
    businessType:{type:String, require: true},
    industry:{type:String, require: true},
    businessDescription:String,
    yearEstablished:Number,
    numberOfEmployees:String,

    // contact details
    businessEmail:{type:String, require: true},
    businessPhone:{type:String, require: true},
    businessWebsite:String,

    // Address 
    businessAddress:{type:String, require: true},
    city:{type:String, require: true},
    state:{type:String, require: true},
    postalCode:{type:String, require: true},
    country:{type:String, require: true},

    // authorized Representative
    contactName:{type:String, require: true},
    contactEmail:{type:String, require: true},
    contactPhone:{type:String, require: true},
    positionTitle:{type:String, require: true},
    idType:String,
    idNumber:{type:String, require: true},

    // compliance kyc
    tin:{type:String, require: true},
    vatNumber:String,
    publiclyTraded:String,
    international:String,

    // File Uploads
    businessRegistration:String,
    taxIdentification:String,
    authorizedRepId:String,
    proofOfAddress:String

})

module.exports = mongoose.model('Business', bussinessSchema)