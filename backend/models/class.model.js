

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ClassSchema = new Schema({
 

  teachers: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Teacher',
    },
  ],
  students: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Student',
    },
  ],
});

const ClassModel = mongoose.model('Class', ClassSchema);
module.exports = { ClassModel };
