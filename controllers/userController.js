const db = require("../models");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

module.exports = {
  getUser: async (req, res) => {
    const user = await db.User.findById(req.user);
    res.json({
      _id: user._id,
      username: user.username,
    });
  },
  register: async (req, res) => {
    try {
      let {
        email,
        username,
        password
      } = req.body;

      // validate

      if (!email || !username || !password) {
        return res
          .status(400)
          .json({ msg: "Not all fields have been entered." });
      }

      if (password.length < 5) {
        return res.status(400).json({
          msg: "The password needs to be at least 5 characters long.",
        });
      }

      const existingUser = await db.User.findOne({ username });
      if (existingUser) {
        return res.status(400).json({
          msg: "An account with this username has already been created",
        });
      }

      const existingEmail = await db.User.findOne({ email });
      if (existingEmail) {
        return res
          .status(400)
          .json({ msg: "An account with this email has already been created" });
      }

      const salt = await bcrypt.genSalt();
      const passwordHash = await bcrypt.hash(password, salt);
      //console.log(passwordHash);

      const newUser = new db.User({
        email: req.body.email,
        username: req.body.username,
        password: passwordHash,
      });

      const savedUser = await newUser.save();
      console.log(savedUser);
      res.json(savedUser);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },
  login: async (req, res) => {
    try {

      // validate

      if (!req.body.username || !req.body.password) {
        return res
          .status(400)
          .json({ msg: "Not all fields have been entered." });
      }

      const {_doc: user} = await db.User.findOne({ username: req.body.username });
      if (!user) {
        return res.status(400).json({ msg: "Username does not exist!" });
      }

      const isMatch = await bcrypt.compare(req.body.password, user.password);
      if (!isMatch) {
        return res.status(400).json({ msg: "Invalid password!" });
      }

      const token = jwt.sign(
        {
          exp: Math.floor(Date.now() / 1000) + (60 * 60),
          _id: user._id,
        },
        "secret"
      );

      const {password, ...userData} = user;
      // delete user.password;
      console.log(Math.floor(Date.now() / 1000) + 60 * 60);
      res.json({
        token,
        user: userData
      });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },
  valid: async (req, res) => {
    try {
      const token = req.header("x-auth-token");
      if (!token) {
        return res.json(false);
      }

      const verified = jwt.verify(token, "secret");
      if (!verified) {
        return res.json(false);
      }

      const user = await db.User.findById(verified._id);
      if (!user) {
        return res.json(false);
      }

      return res.json(true);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },
  delete: async (req, res) => {
    try {
      const deletedUser = await db.User.findByIdAndDelete(req.user);
      res.json(deletedUser);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },
  addFavorite: async (req, res) => {
    try {
      console.log("userController", req.body);
      const updateUserFavorites = await db.User.findByIdAndUpdate(req.params.userId, { $push: { favcats: req.body }});
      res.json(updateUserFavorites);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },
  addCreated: async (req, res) => {
    try {
      console.log("userController", req.body);
      const updateUserCreated = await db.User.findByIdAndUpdate(req.params.userId, { $push: { createdcats: req.body }});
      res.json(updateUserCreated);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },
  findById: function (req, res) {
    console.log("findById", req.params);
    db.User.findById(req.params.id)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  getFavorites: function (req, res) {
    console.log("getFavorites", req.params.userId);
    db.User.findById(req.params.userId)
      .then((dbModel) => {
        console.log("From Database", dbModel);
        res.json(dbModel)
      })
      .catch((err) => res.status(422).json(err));
  },
  getCreated: function (req, res) {
    console.log("getCreated", req.params.userId);
    db.User.findById(req.params.userId)
      .then((dbModel) => {
        console.log("From Database", dbModel);
        res.json(dbModel)
      })
      .catch((err) => res.status(422).json(err));
  }
};