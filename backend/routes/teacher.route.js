const express = require('express');

const { TeacherModel } = require('../models/teacher.model'); 
// const{ClassModel} = require('../models/class.model')
const {userModel} = require("../models/user.model") 
const {StudentModel} = require("../models/student.model")
const { roleMiddleware } = require('../roleMiddleware/roleMiddleware');
const teacherRoute = express.Router();


teacherRoute.post('/', roleMiddleware, async (req, res) => {
    const { userid, subjects } = req.body;

    if (!userid || !subjects) {
        return res.status(400).json({ msg: 'userid and subjects are required.' });
    }

    try {
        const newTeacher = new TeacherModel({ userid, subjects });
        await newTeacher.save();
        res.status(201).json({ msg: 'Teacher created successfully', teacher: newTeacher });
    } catch (error) {
        res.status(500).json({ msg: 'Error creating teacher', error: error.message });
    }
});

// Get all teachers
teacherRoute.get('/all', roleMiddleware, async (req, res) => {
    try {
        const teachers = await TeacherModel.find();
        res.status(200).json(teachers); 
    } catch (error) {
        res.status(500).json({ msg: 'Error fetching teachers', error: error.message });
    }
});



// =========================student-routes============================

teacherRoute.post("/student", roleMiddleware, async (req, res) => {
  try {
    const {
      userid,
      enrollmentNumber,
      class: studentClass,
      subjects,
      dateOfBirth,
      address,
      email,
      phoneNumber,
      gender
    } = req.body;

    // Check if required fields are present
    if (!userid || !enrollmentNumber || !studentClass || !dateOfBirth || !address || !email || !phoneNumber || !gender) {
      return res.status(400).json({
        error: "Missing required fields: userid, enrollmentNumber, class, dateOfBirth, address, email, phoneNumber, and gender are mandatory."
      });
    }

    const { street, city, state, zipCode } = address;
    if (!street || !city || !state || !zipCode) {
      return res.status(400).json({
        error: "Address fields (street, city, state, and zipCode) are required."
      });
    }

    // Check if a student with the same email already exists
    const existingStudent = await StudentModel.findOne({ email });
    if (existingStudent) {
      return res.status(400).json({ error: "A student with this email already exists." });
    }

    // Create a new student instance
    const student = new StudentModel({
      userid,
      enrollmentNumber,
      class: studentClass,
      subjects,
      dateOfBirth,
      address: {
        street,
        city,
        state,
        zipCode
      },
      email,
      phoneNumber,
      gender
    });

    // Save the student to the database
    const savedStudent = await student.save();
    res.status(201).json(savedStudent);

  } catch (error) {
    console.error('Error creating student:', error);
    res.status(500).json({ error: 'Failed to create student' });
  }
});




teacherRoute.get("/studentdata", roleMiddleware, async (req, res) => {
  try {
   
    const email = req.query.email;


    if (!email) {
      return res.status(400).json({ message: 'Email is required' });
    }


    const students = await StudentModel.find({ email });


    if (students.length === 0) {
      return res.status(404).json({ message: 'No students found with this email' });
    }

 
    res.status(200).json(students);
  } catch (error) {
    console.error('Error fetching students:', error);
    res.status(500).json({ error: 'Failed to fetch students' });
  }
});

teacherRoute.get("/data",roleMiddleware,async(req,res)=>{
    try {
     
        const students = await StudentModel.find();
        
      
        res.status(200).json(students);
      } catch (error) {
        console.error('Error fetching students:', error);
        res.status(500).json({ error: 'Failed to fetch students' });
      }
})

module.exports = { teacherRoute };
