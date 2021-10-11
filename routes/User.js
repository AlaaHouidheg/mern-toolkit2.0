const express = require("express");
const router = express.Router();
const User = require("../models/User");

//POST
//methode:POST
//params: req.body
router.post("/", async (req, res) => {
  try {
    const newUser = new User(req.body);
    const result = await newUser.save();
    res.send({ response: result, msg: "user saved" });
  } catch (error) {
    res.status(200).send({ msg: `cannot save the user${error}` });
  }
});
//GEt
//methode:GET
router.get("/", async (req, res) => {
  try {
    const result = await User.find();
    res.send({ respond: result, msg: "getted successfully" });
  } catch (error) {
    res.send({ msg: `cannot get users${error}` });
  }
});

//GEt by id

//param:id

router.get("/:id", async (req, res) => {
  try {
    const result = await User.findOne({ _id: req.params.id });
    res.send({ respond: result, msg: "user getted  successfully" });
  } catch (error) {
    res.send({ msg: `cannot get the user${error}` });
  }
});

//delete
//params :id
router.delete("/:id", async (req, res) => {
  try {
    const result = await User.findByIdAndDelete({ _id: req.params.id });
    res.send("user deleted");
  } catch (error) {
    res.send({ msg: "cannot delete user" });
  }
});

//put

router.put("/:id", async (req, res) => {
  try {
    const result = await User.updateOne(
      { _id: req.params.id },
      { $set: { ...req.body } }
    );
    res.send("user update");
  } catch (error) {
    res.send("coannot delete user");
  }
});

module.exports = router;
