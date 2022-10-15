const mongoose = require("mongoose")

var StudentSchema = new mongoose.Schema({
    name: String,
    email: String,
    gender: String,
    image: String,
    dob: Date,
    year: Number,
    grade: Number,
    graduated: Boolean
}, {
    versionKey: false //optional (to remove _v: 0 when add new data)
})

var StudentModel = mongoose.model('Sinh Vien', StudentSchema, 'student')
module.exports = StudentModel