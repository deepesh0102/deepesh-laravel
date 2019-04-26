const mongoose = require('mongoose');
// Define a schema
const Schema = mongoose.Schema;
const CategorySchema = new Schema({
 name: {
  type: String,
  trim: true,  
  required: true,
 },
 subCategories:[{type:Schema.ObjectId, ref:'Category'}],
 parent:{ type:mongoose.Schema.Types.ObjectId, ref:'Category', default:null},
});
module.exports = mongoose.model('Category', CategorySchema);