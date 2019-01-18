let db = require("../store")

let ProductSchema = new db.Schema({
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  }
}, {
  versionKey: false
});

module.exports = db.model('Product', ProductSchema);