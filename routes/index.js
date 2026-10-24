const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../views/index.html'));
});

router.get('/servicios', (req, res) => {
    res.sendFile(path.join(__dirname, '../views/servicios.html'));
});

router.get('/gestion', (req, res) => {
    res.sendFile(path.join(__dirname, '../views/gestion.html'));
});

module.exports = router;