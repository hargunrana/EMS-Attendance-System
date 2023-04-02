const data = [
    {
        name: "Mandeep Singh",
        empId: "006873",
        phoneNo: "0011001100",
        dates: {
            1: {
                inconclusive: false,
                incomplete: false,
                inTime: "9:00 am",
                outTime: "6:00 pm",
                deductions: [
                    /* in */
                    {
                        inTime: "9:00 am",
                        outTime: null,
                        deduction: "0",
                    },
                    /* lunch break */
                    {
                        outTime: "1:00 pm",
                        inTime: "1:30 pm",
                        deduction: "0",
                    },
                    /* out */
                    {
                        outTime: "6:00 pm",
                        inTime: null,
                        deduction: "0",
                    },
                ],
            },
        },
    },

    {
        name: "Rajinder Kumar",
        empId: "006872",
        phoneNo: "0011001100",
        dates: {
            1: {
                inconclusive: false,
                incomplete: true,
                inTime: "9:00 am",
                deductions: [
                    /* in */
                    {
                        inTime: "9:00 am",
                        outTime: null,
                        deduction: "0",
                    },
                    /* lunch break */
                    {
                        outTime: "1:00 pm",
                        inTime: "1:30 pm",
                        deduction: "0",
                    },
                ],
            },
        },
    },

    {
        name: "Sam Wilson",
        empId: "006871",
        phoneNo: "0011001100",
        dates: {
            1: {
                inconclusive: true,
                incomplete: false,
                inTime: "9:00 am",
                outTime: "6:00 pm",
                deductions: [
                    /* in */
                    {
                        inTime: "9:00 am",
                        outTime: null,
                        deduction: "0",
                    },
                    /* lunch break */
                    {
                        outTime: "1:00 pm",
                        inTime: "1:30 pm",
                        deduction: "0",
                    },
                    /* out */
                    {
                        outTime: "6:00 pm",
                        inTime: null,
                        deduction: "0",
                    },
                    /* in */
                    {
                        inTime: "6:00 pm",
                        outTime: null,
                        deduction: "0",
                    },
                ],
            },
        },
    },

    {
        name: "Roger Franklin",
        empId: "006870",
        phoneNo: "0011001100",
        dates: {
            1: {
                inconclusive: true,
                incomplete: false,
                inTime: "9:00 am",
                outTime: "6:00 pm",
                deductions: [
                    /* in */
                    {
                        inTime: "9:00 am",
                        outTime: null,
                        deduction: "0",
                    },
                    /* lunch break (error data in and out times swapped)*/
                    {
                        inTime: "1:00 pm",
                        outTime: "1:30 pm",
                        deduction: "0",
                    },
                    /* out */
                    {
                        outTime: "6:00 pm",
                        inTime: null,
                        deduction: "0",
                    },
                    /* in */
                    {
                        inTime: "6:00 pm",
                        outTime: null,
                        deduction: "0",
                    },
                ],
            },
        },
    },
];


export default data;

