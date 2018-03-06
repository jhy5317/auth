import express from 'express';
var router = express.Router();

import User from '../models/user';

router.post('/register', (req, res) => {
  if(req.body.password !== req.body.passwordCheck){
    res.json({
      success: false,
      err: 'PASSWORD NOT MATCH!'
    });
  }else{
    User.findOne({username: req.body.username}, (err, exist) => {
      if(exist){
        res.json({
          success: false,
          err: 'EXISTS USERNAME!'
        });
      }else{
        let user = new User({
          username: req.body.username,
          password: req.body.password
        });
        user.password = user.generateHash(user.password);

        user.save((err) => {
          if(err) throw err;
          res.json({
            success: true,
            msg: 'SUCCESSFUL REGISTER!'
          })
        })
      }
    })
  }
})

export default router;
