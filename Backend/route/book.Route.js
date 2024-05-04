import express from 'express';
import { getbook } from '../contoller/book.contoller.js'

const router = express.Router();
router.get("/", getbook);

export default router;