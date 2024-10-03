// student.model.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const StudentSchema = new Schema({
    userid: {
        type: Schema.Types.ObjectId,
        required: true,
        unique: true,
      },
//   classes: [
//     {
//       type: Schema.Types.ObjectId,
//       ref: 'Class', // Reference to the Class model
//     },
//   ],

});

const StudentModel = mongoose.model('Student', StudentSchema);
module.exports = { StudentModel };
