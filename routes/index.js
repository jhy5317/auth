import express from 'express';
var router = express.Router();

import register from './register';
import login from './login';

router.use('/', register);
router.use('/', login);

export default router;
