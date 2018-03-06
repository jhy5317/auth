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

router.post('/login', function (req, res) {
  _user2.default.findOne({ username: req.body.username }, function (err, exist) {
    if (!exist) {
      res.json({
        success: false,
        err: "NO EXIST USERNAME!"
      });
    } else {
      if (!exist.validateHash(req.body.password)) {
        res.json({
          success: false,
          err: "PASSWORD NOT MATCH!"
        });
      } else {
        res.json({
          success: true,
          user: exist
        });
      }
    }
  });
});

exports.default = router;