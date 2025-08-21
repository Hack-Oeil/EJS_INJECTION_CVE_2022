const express = require('express');
const app = express();
const path = require('path');

const hoFW = require('./app/ho-fw.js');

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => { res.render('index'); });
app.get('/games', (req, res) => { res.render('games'); });
app.get('/movies', (req, res) => { res.render('movies'); });
app.get('/news', (req, res) => { res.render('news'); });
app.get('/comics', (req, res) => { res.render('comics'); });
app.get('/flag-secret-289a57',
    (req, res, next) => { hoFW.flag(req, res, next); },
    (req, res) => { res.render('flag'); }
);

app.use((req, res) => { res.status(404).render('error_404', req.query); });
app.listen(80);
