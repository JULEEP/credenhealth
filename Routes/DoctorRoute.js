import express from 'express';
import { createPrescription,  createBlog, getAllBlogs, getSingleBlog} from '../Controller/doctorController.js';

const router = express.Router();


router.post('/createprescription/:doctorId/:appointmentId', createPrescription);
router.post('/create-blog/:doctorId', createBlog);
router.get('/blogs', getAllBlogs);
router.get('/blogs/:blogId', getSingleBlog);














export default router;
