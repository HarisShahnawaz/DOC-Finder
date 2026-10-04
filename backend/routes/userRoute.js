import express from 'express';
import {registerUser , loginUser , getProfile} from '../controllers/userController.js'
import authUser from '../middlewares/authUser.js'


const router = express.Router()

router.post('/register', registerUser)
router.post('/login', loginUser)

router.get('/get-profile', authUser, getProfile)

export default router   