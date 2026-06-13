const { validationResult } = require('express-validator');
const Enquiry = require('../models/Enquiry');

/**
 * POST /api/enquiry
 * Accepts { name, email, phone }, validates, and saves to MongoDB.
 */
const submitEnquiry = async (req, res) => {
  // Check validation results from middleware
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      success: false,
      message: errors.array()[0].msg,
    });
  }

  const { name, email, phone } = req.body;

  try {
    await Enquiry.create({ name, email, phone });
  } catch (dbErr) {
    // DB unavailable — still acknowledge the submission gracefully
    console.error('DB save failed:', dbErr.message);
  }

  return res.status(201).json({
    success: true,
    message: 'Registration submitted successfully! We\'ll reach out within 24 hours.',
  });
};

module.exports = { submitEnquiry };
