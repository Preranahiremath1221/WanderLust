const mongoose = require("mongoose");
const Review = require("./review.js");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,
  image: {
    url: String,
    filename: String,
  },
  price: Number,
  location: String,
  country: String,
  reviews: [
  {
    type: Schema.Types.ObjectId,
    ref:"Review"
  }
],
owner: {
  type: Schema.Types.ObjectId,
  ref: "User",
},
});

listingSchema.post("findOneAndDelete", async (listig) => {
  if (listig) {
    await Review.deleteMany({_id: { $in:listig.reviews}});
  }
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;
