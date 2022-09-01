var express = require("express");
var router = express.Router();
const fetchUser = require("../middleware/fetchUser");
const Notes = require("../models/Notes");
const { body, validationResult } = require("express-validator");
const User = require("../models/User");

// ROUTE 1: Fetch all notes of the logged in  user using: GET "/api/notes/fetchallnotes".Require login
router.get("/fetchallnotes", fetchUser, async (req, res) => {
  try {
    const notes = await Notes.find({ user: req.user.id });
    res.json(notes);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});

// ROUTE 2: Add notes for the logged in  user using: POST "/api/notes/addnote".Require login
router.post(
  "/addnote",
  fetchUser,
  [
    body("title", "Your title should be atleast 3 characters").isLength({
      min: 3,
    }),
    body("description", "Description must be atleast 10 characters").isLength({
      min: 10,
    }),
  ],
  async (req, res) => {
    
    try {
        const { title, description, tag } = req.body;
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
        }
      const note = new Notes({
        title, description, tag, user: req.user.id,
      });
      const savedNotes = await note.save();
      res.json(savedNotes);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error");
    }
  }
);

module.exports = router;
