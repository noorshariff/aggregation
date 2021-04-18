const router = require('express').Router()
const custDetails = require('./customerDetails')

router.use(custDetails)

module.exports = router