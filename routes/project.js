// import express and create a router object
const express = require('express');
const router = express.Router();

// configue route, GET to /project
router.get('/', (req, res, next) => {
    res.render('project', {
        title: 'Check Out My Projects',
        projects: [
            {
                image: '/images/project/MovieWeb.png',
                name: 'Movie Web App',
                description: 'HTML, CSS, JavaScript and API',
                githubLink: 'https://github.com/kateviajar/Movie-Website.git'
            },
            {
                image: '/images/project/HotHitLyrics.png',
                name: 'HotHit Lyrics Web App',
                description:'ASP.NET with CRUD operations and Azure SQL',
                githubLink: 'https://github.com/kateviajar/HotHitsLyrics.git'
            },
            {
                image: '/images/project/FlightSearch.png',
                name: 'Flight Tickets Searching App',
                description:'JavaFX and Flight Data API',
                githubLink: 'https://github.com/kateviajar/F21COMP1011Assignment2.git'
            },
            {
                image: '/images/project/BitcoinPrice.png',
                name: 'Bitcoin Price App',
                description:'JavaFX and MySQL database',
                githubLink: 'https://github.com/kateviajar/F21COMP1011Assignment1.git'
            }
        ]
    });
});

// export the router object
module.exports = router;