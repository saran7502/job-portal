// import multer from "multer";

// const storage = multer.diskStorage({})

// const upload = multer({ storage })


// export default upload


import multer from 'multer';

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage });

export default upload;

//app.post("/api/company/register", upload.single("image"), registerCompany);



