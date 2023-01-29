const createPath = require("../helpers/create-path");
const SocialMedia = require("./../models/socialmedia");

const getContcts = (req, res) => {
  const title = "Contacts";

  SocialMedia.find()
    .then((data) => {
      res.render(createPath("contacts"), { title, contacts: data });
    })
    .catch((error) => {
      res.render(createPath("error"), { title: "error" });
    });
};

module.exports = { getContcts };
