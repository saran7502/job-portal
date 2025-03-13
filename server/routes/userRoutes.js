import express from 'express'
import { applyForJob, getUserData, getuserJobApplications, updateUserResume } from '../controllers/userController.js'

const router = express.Router()

router.get('/user', getUserData)


router.post('/apply', applyForJob)


router.get('/applications', getuserJobApplications)



router.post('/update-resume', upload.single('resume'), updateUserResume)



export default router;