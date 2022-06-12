// import express and create a router object
const express = require('express');
const router = express.Router();

// configue route, GET to /about
router.get('/', (req, res, next) => {
    // render the about view
    res.render('about', {
        title: 'About Me',
        works: [
            {
                logo: '/images/company/ops.jpeg',
                company: 'Ministry of Government and Consumer Services',
                jobTitle: 'Automation Developer',
                duration: 'Jan.2022 to Apr.2022'
            },
            {
                logo: '/images/company/bt.jpeg',
                company: 'Buddytree Software Inc.',
                jobTitle: 'Data Analyst',
                duration: 'Aug.2021 to Oct.2021'
            },
            {
                logo: '/images/company/Molex.jpeg',
                company: 'Molex Electronic Solutions LTD.',
                jobTitle: 'Quality Engineer',
                duration: 'Jul.2018 to Jun.2020'
            },
            {
                logo: '/images/company/th.jpeg',
                company: 'Tong-Hsing Electronic Industries LTD.',
                jobTitle: 'Quality Assurance Engineer',
                duration: 'Oct.2014 to Mar.2018'
            }
        ]
    });
});

// export the router object
module.exports = router;