'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _bcrypt = require('bcrypt');

var _bcrypt2 = _interopRequireDefault(_bcrypt);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var User = new _mongoose2.default.Schema({
  username: { type: String },
  password: { type: String },
  created_at: { type: Date, default: Date.now }
});

//(password) => {} : 쓰면안됨^_^ 아시겠어연?
User.methods.generateHash = function (password) {
  return _bcrypt2.default.hashSync(password, 8);
};

User.methods.validateHash = function (password) {
  return _bcrypt2.default.compareSync(password, this.password);
};

exports.default = _mongoose2.default.model('user', User);