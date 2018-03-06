'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _user = require('../models/user');

var _user2 = _interopRequireDefault(_user);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

router.post('/register', function (req, res) {
  if (req.body.password !== req.body.passwordCheck) {
    res.json({
      success: false,
      err: 'PASSWORD NOT MATCH!'
    });
  } else {
    _user2.default.findOne({ username: req.body.username }, function (err, exist) {
      if (exist) {
        res.json({
          success: false,
          err: 'EXISTS USERNAME!'
        });
      } else {
        var user = new _user2.default({
          username: req.body.username,
          password: req.body.password
        });
        user.password = user.generateHash(user.password);

        user.save(function (err) {
          if (err) throw err;
          res.json({
            success: true,
            msg: 'SUCCESSFUL REGISTER!'
          });
        });
      }
    });
  }
});

exports.default = router;