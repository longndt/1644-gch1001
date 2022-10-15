const express = require('express')
const StudentModel = require('../models/StudentModel')
const router = express.Router()


router.get('/drop', (req, res) => {
    StudentModel.deleteMany({}, () => {
        console.log("Delete all data succeed !")
        res.redirect('/student')
    })
})



//URL: localhost:3000/student
router.get('/', (req, res) => {
    StudentModel.find((err, data) => {
        if (!err) {
            //res.send(data)
            //render ra trang index ở thư mục views/student
            res.render('student/index', { student: data })
        }
    })
})

<<<<<<< HEAD
=======
router.get('/api', (req, res) => {
    StudentModel.find((err, data) => {
        if (!err) {
            //res.send(data)
            //render ra trang index ở thư mục views/student
            res.json(data)
        }
    })
})
>>>>>>> 6604ff11cea57b9c19932a636ca6dd633d8272f6

router.get('/delete/:id', (req, res) => {
    StudentModel.findByIdAndDelete(req.params.id, (err) => {
        if (err) {
            console.log(err)
        } else {
            console.log("Delete student succeed !");
            //var message = "Delete student succeed !";
            //redirect về trang /student (URL không phải view)
            res.redirect("/student");
        }
    })
})

//render ra form ADD
router.get('/add', (req, res) => {
    res.render("student/new");
})

//nhận & xử lý dữ liệu từ form ADD
router.post('/add', (req, res) => {
    //Cách 1: dùng "save"
    // var student = new StudentModel(req.body)
    // student.save((err) => {
    //     if (err) {
    //         console.log(err)
    //     } else {
    //         console.log("Add student succeed !")
    //         res.redirect("/student")
    //     }
    // })
    //Cách 2: dùng "create"
    StudentModel.create(req.body, (err) => {
        if (!err) {
            console.log('Add student succeed !')
            res.redirect("/student")
        }
    })
})

//render ra form EDIT
router.get('/edit/:id', (req, res) => {
    StudentModel.findById(req.params.id, (err, data) => {
        if (!err) {
            //render ra file: update.hbs (trong thư mục views/student)
            //gửi kèm dữ liệu của object student để load vào form edit
            //student (tên) , data (dữ liệu)
            res.render("student/update", { student: data })
        }
    })
})

//nhận & xử lý dữ liệu từ form EDIT
router.post('/edit/:id', (req, res) => {
    var id = req.params.id;
    var student = req.body;
    StudentModel.findByIdAndUpdate(id, student, (err) => {
        if (!err) {
            console.log("Update student succeed !")
            res.redirect("/student")
        }
    })
})

router.get('/detail/:id', (req, res) => {
    StudentModel.findById(req.params.id, (err, student) => {
        if (!err) {
            res.render('student/info', { student: student })
        }
    })
})

//search function
router.post('/search', (req, res) => {
    StudentModel.find({ name: new RegExp(req.body.name, "i") }, (err, data) => {
        if (!err) {
            res.render('student/index', { student: data })
        }
    })
})
//sort function
router.get('/sort/asc', (req, res) => {
    StudentModel.find()
        .sort({ name: 1 })
        .exec((err, data) => {
            if (!err) {
                res.render('student/index', { student: data })
            }
        })
})

router.get('/sort/desc', (req, res) => {
    StudentModel.find()
        .sort({ name: -1 })
        .exec((err, data) => {
            if (!err) {
                res.render('student/index', { student: data })
            }
        })
})

<<<<<<< HEAD
=======


>>>>>>> 6604ff11cea57b9c19932a636ca6dd633d8272f6
module.exports = router