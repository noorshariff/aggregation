const express = require('express');
const {Router} = express;
const router = express.Router();
const customerDetailsController = require('../controller/customerDetails')

router.post('/customer-data', customerDetailsController.createData);

router.get('/get-customer-data',customerDetailsController.getCustomerDetails )

module.exports = router;
