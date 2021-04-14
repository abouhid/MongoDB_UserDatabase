const mongoose = require("mongoose");

const User = mongoose.model("User");

module.exports = {
  async insert(req, res) {
    try {
      const users = await User.create(req.body);
      return res.json(users);
    } catch (err) {
      console.log(err);
    }
  },
  async index(req, res) {
    try {
      const { page } = req.query;
      const users = await User.paginate({}, { page, limit: 5 });
      return res.json(users);
    } catch (err) {
      console.log(err);
    }
  },
  async details(req, res) {
    try {
      const users = await User.findById(req.params.id);
      return res.json(users);
    } catch (err) {
      console.log(err);
    }
  },
  async update(req, res) {
    try {
      const users = await User.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      });
      return res.json(users);
    } catch (err) {
      console.log(err);
    }
  },
};
