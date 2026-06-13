const express = require('express');
const router = express.Router();

const { submitEnquiry } = require('../controllers/enquiryController');
const { enquiryValidation } = require('../middleware/validate');

// POST /api/enquiry
router.post('/enquiry', enquiryValidation, submitEnquiry);

module.exports = router;
