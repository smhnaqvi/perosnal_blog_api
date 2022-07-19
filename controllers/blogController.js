const { validationResult } = require("express-validator");
const { Blog } = require("./../models");

const ErrorHandling = (err, res) => {
  console.error(err);
  res.json({
    error: "have error to create new blog post please check logs",
  });
};

const ResponseHandler = (res, data, error = null) => {
  res.json({
    success: !error,
    error,
    data,
  });
};

//Detail
const Details = (req, res) => {
  Blog.findByPk(req.params.id)
    .then((result) => ResponseHandler(res, result, null))
    .catch((err) => ErrorHandling(err, res));
};
//Create
const Create = (req, res) => {
  const errors = validationResult(req);
  //validation form errors
  if (!errors.isEmpty()) {
    return res.status(422).jsonp(errors.array());
  }

  Blog.create({
    title: req.body.title,
    description: req.body.description,
  })
    .then((result) => ResponseHandler(res, result))
    .catch((err) => ErrorHandling(err, res));
};
//Update
const Update = (req, res) => {
  res.json();
};
//List
const List = (req, res) => {
  Blog.findAll({ where: { is_active: 1 } })
    .then((result) => ResponseHandler(res, result, null))
    .catch((err) => ErrorHandling(err, res));
};
//Delete
const Delete = (req, res) => {
  res.json();
};

module.exports = {
  Details,
  Create,
  Update,
  List,
  Delete,
};
