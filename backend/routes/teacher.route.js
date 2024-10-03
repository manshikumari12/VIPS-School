const express = require('express');

const { TeacherModel } = require('../models/teacher.model'); 
// const{ClassModel} = require('../models/class.model')
// const {StudentModel} = require("../models/student.model")
const { roleMiddleware } = require('../roleMiddleware/roleMiddleware');
const teacherRoute = express.Router();
// Create a new teacher

teacherRoute.post('/', roleMiddleware, async (req, res) => {
    const { userid, subjects } = req.body;

    // Basic input validation
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
        res.status(200).json(teachers); // Set appropriate status code
    } catch (error) {
        res.status(500).json({ msg: 'Error fetching teachers', error: error.message });
    }
});




module.exports = { teacherRoute };
