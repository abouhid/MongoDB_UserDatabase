const mongoose = require("mongoose");

const mongoosePaginate = require("mongoose-paginate");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
    uppercase: true,
    minlength: 3,
    maxlength: 100,
  },
  registration: {
    type: String,
    require: true,
    unique: true,
    min: 1,
    maxl: 9999,
  },
  active: {
    type: Boolean,
    require: true,
    default: true,
  },
  address: {
    city: {
      type: String,
      require: true,
      minlength: 3,
      maxlength: 100,
    },
    state: {
      type: String,
      require: true,
      minlength: 2,
      maxlength: 2,
    },
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

UserSchema.plugin(mongoosePaginate);

mongoose.model("User", UserSchema);
