
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const StudentSchema = new Schema({
  userid: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User',
},
enrollmentNumber: {
    type: String,
    required: true,
    unique: true, 
},
class: {
    type: String,
    required: true,
},
subjects: {
    type: [String], 
},
dateOfBirth: {
    type: Date,
    required: true,
},
phoneNumber: {
    type: Number,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
address: {
    street: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    state: {
        type: String,
        required: true,
    },
    zipCode: {
        type: String,
        required: true,
    },
},
email: {
    type: String,
    required: true,
},

});

const StudentModel = mongoose.model('Student', StudentSchema);
module.exports = { StudentModel };
