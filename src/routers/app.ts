export {}

/* Libraries */
const express = require('express');
const path = require('path');
const chalk = require('chalk');


/* Config */
const router = new express.Router();

const publicPath = path.join(__dirname, '../../../public');
const portfolioRoute = path.join(publicPath, 'portfolio.html');


/* Routes */
router.get('/', (req: any, res: any): any => {
    try {
        return res.sendFile(portfolioRoute);

    } catch(e) {
        res.send();
        console.log(chalk.red('An error occured on the homepage: '));
        console.log(e);
    }
})

router.get('/resume', (req: any, res: any): any => {
    try {
        return res.sendFile(path.join(publicPath, 'resume.pdf'));

    } catch(e) {
        res.send();
        console.log(chalk.red('An error occured on /resume: '));
        console.log(e);
    }
});

router.get('/*', (req, res): any => {
    try {
        return res.sendFile(path.join(publicPath, 'index.html'));

    } catch(e) {
        res.send()
        console.log(chalk.red('An error occured on the wildcard: '));
        console.log(e);
    }
});


module.exports = router;
