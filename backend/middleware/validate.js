const { body } = require('express-validator');

const enquiryValidation = [
  body('name')
    .trim()
    .notEmpty()
    .withMessage('Name is required'),

  body('email')
    .trim()
    .notEmpty()
    .withMessage('Email is required')
    .isEmail()
    .withMessage('Valid email is required')
    .normalizeEmail(),

  body('phone')
    .trim()
    .notEmpty()
    .withMessage('Phone number is required')
    .matches(/^[0-9+\-\s]{7,15}$/)
    .withMessage('Enter a valid phone number (7–15 digits)'),
];

module.exports = { enquiryValidation };
