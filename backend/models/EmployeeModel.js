const mongoose = require("mongoose");

const DeductionSchema = new mongoose.Schema({
    inTime: String,
    outTime: String,
    deduction: String,
});

const DatesSchema = new mongoose.Schema({
    inconclusive: Boolean,
    incomplete: Boolean,
    inTime: String,
    outTime: String,
    deductions: [DeductionSchema],
});

const EmployeeSchema = new mongoose.Schema({
    name: String,
    empId: String,
    phoneNo: String,
    dates: {
        type: Map,
        of: DatesSchema,
    },
});

const EmployeeModel = mongoose.model("Employee", EmployeeSchema);

const subscriberSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
});

// module.exports = EmployeeModel;
module.exports = mongoose.model("subscriber", subscriberSchema);
