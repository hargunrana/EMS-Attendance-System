const express = require('express')
const router = express.Router()
const EmployeeModel = require('../models/EmployeeModel')

// Getting all
router.get('/', async (req, res) => {
  try {
    const employees = await EmployeeModel.find()
    res.json(employees)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})


module.exports = router