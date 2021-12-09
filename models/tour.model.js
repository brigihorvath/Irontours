const { Schema, model } = require('mongoose');

const TourSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Please provide a tour name'],
    trim: true,
    unique: true,
  },
  description: {
    type: String,
    required: [true, 'Please provide a valid password'],
    minLength: 5,
    trim: true,
  },
  image: {
    type: String,
    default: '/images/tours/default-tour.jpg',
  },
  tourGuide: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
});

module.exports = model('Tour', TourSchema);
