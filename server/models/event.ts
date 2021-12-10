const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const eventSchema = new Schema({
    title:String,
    description: String,
    date: Date,
    location: String,
    image: String,
    isFeatured: Boolean,
});

module.exports = mongoose.model('Event', eventSchema);
