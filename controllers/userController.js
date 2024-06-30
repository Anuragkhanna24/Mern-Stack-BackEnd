const User = require('../models/user');
const multer = require('multer');
const path = require('path');


const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});
const upload = multer({ storage: storage });



exports.createUser = async (req, res) => {
  console.log(req);
  const formData1 = JSON.parse(req.body.formData1);
  console.log(formData1,'formdata1111')
  const user = new User({
    firstname: req.body.firstName,
    lastname: req.body.lastName,
    email: req.body.email,
    dateofbirth: req.body.dateOfBirth,
    residentialstreet1: req.body.residentialStreet1,
    residentialstreet2: req.body.residentialStreet2,
    permanentstreet1: req.body.permanentStreet1,
    permanentstreet2: req.body.permanentStreet2,
    // filename: req.body.fileName,
    // filetype: req.body.fileType,
    // avatar: req.formData1 ? req.formData1.uploadFile : null,
    formData1:formData1
  });

  try {
    const newUser = await user.save();
    res.send({
      code: 200,
      status: "Success",  
      data : newUser
    });
    console.log("success");
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
