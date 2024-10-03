const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TeacherSchema = new Schema({
  userid: {
    type: Schema.Types.ObjectId,
    required: true,
    unique: true,
  },
  subjects: [String],
  
//   classes: [
//     {
//       type: Schema.Types.ObjectId,
//       ref: 'Class',
//     },
//   ],
//   students: [
//     {
//       type: Schema.Types.ObjectId,
//       ref: 'Student',
//     },
//   ],
//   communication: [
//     {
//       type: Schema.Types.ObjectId,
//       ref: 'Communication',
//     },
//   ],
});

const TeacherModel = mongoose.model('Teacher', TeacherSchema);
module.exports = { TeacherModel };
