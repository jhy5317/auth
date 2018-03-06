import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

let User = new mongoose.Schema({
  username: {type: String},
  password: {type: String},
  created_at: {type: Date, default: Date.now}
});

//(password) => {} : 쓰면안됨^_^ 아시겠어연?
User.methods.generateHash = function(password) {
  return bcrypt.hashSync(password, 8);
};

User.methods.validateHash = function(password) {
  return bcrypt.compareSync(password, this.password);
};

export default mongoose.model('user', User);
