const bodyParser = require("body-parser");
const express = require("express");
const { check } = require("express-validator");
const router = express.Router();
const urlencodedParser = bodyParser.urlencoded({ extended: false });

const {
  Details,
  Create,
  Update,
  List,
  Delete,
} = require("../controllers/blogController");

router.get("/", List);
router.get("/:id", Details);

// create new blog post
router.post(
  "/",
  urlencodedParser,
  [
    check("title", "the title is required").exists(),
    check("description", "the description is required").exists(),
  ],
  Create
);

// update existing blog post
router.put("/", urlencodedParser, Update);
router.delete("/", Delete);

module.exports = router;
