// import { express } from 'express';
// import { ChangeJobApplications, changeVisiblity, getCompanyData, getCompanyJobApplications, getCompanyPostedJobs, loginCompany, postJob, registerCompany } from '../controllers/companyController.js';

// const router = express.Router()

// //Register a company
// router.post('/register', XMLHttpRequestUpload.single('image'),registerCompany)


// //Company login
// router.post('/login', loginCompany)

// //Get company data
// router.get('/company', getCompanyData)


// //Post a job

// router.post('/post-job', postJob)

// //Get Applications Data of company
// router.get('/applications', getCompanyJobApplications)

// //Get company Job list

// router.get('/list-jobs', getCompanyPostedJobs)

// //Change applications status

// router.get('/change-status', ChangeJobApplicationsstatus)

// //Change Applications Visibility

// router.post('/change-visibility', changeVisiblity)


// export default router;




import express from "express";
import upload from "../config/multer.js";
import {
  registerCompany,
  loginCompany,
  getCompany,
  postJob,
  getCompanyJobApplications,
  getCompanyPostedJobs,
  ChangeJobApplications,
  changeVisibility,
} from "../controllers/companyController.js";
import { protectCompany } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/register", upload.single('image'),registerCompany);
router.post("/login", loginCompany);
router.get("/getCompany", protectCompany,getCompany);
router.post("/postJob", protectCompany,postJob);
router.get("/getCompanyJobApplications", protectCompany,getCompanyJobApplications);
router.get("/getCompanyPostedJobs",protectCompany ,getCompanyPostedJobs);
router.post("/changeJobApplications", protectCompany,ChangeJobApplications);
router.post("/changeVisibility",protectCompany ,changeVisibility);

export default router;
