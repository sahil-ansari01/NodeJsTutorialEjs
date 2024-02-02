const express = require('express');

const contactUsController = require('../controllers/contact-us');

const router = express.Router();

router.get('/contact-us', contactUsController.getContactUS)

router.post('/contact-us', contactUsController.postContactUs)

module.exports = router;
