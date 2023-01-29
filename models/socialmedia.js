const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const socialMediaSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
});

const SocialMediaModel = mongoose.model("social-media", socialMediaSchema);

module.exports = SocialMediaModel;
