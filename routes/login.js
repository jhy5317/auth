import express from 'express';
var router = express.Router();

import User from '../models/user';

router.post('/login', (req, res) => {
  User.findOne({username: req.body.username}, (err, exist) => {
    if(!exist){
      res.json({
        success: false,
        err: "NO EXIST USERNAME!"
      });
    }else{
      if(!exist.validateHash(req.body.password)){
        res.json({
          success: false,
          err: "PASSWORD NOT MATCH!"
        });
      }else{
        res.json({
          success: true,
          user: exist
        })
      }
    }
  })
});

export default router;
