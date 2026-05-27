const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const app = express();

const db = new sqlite3.Database('./awing.db');

app.use(express.static('public'));
app.set('view engine', 'ejs');

// 1. PAGE D'ACCUEIL : Une vraie Landing Page (Pas de boucle brute de la DB)
app.get('/', (req, res) => {
    res.render('index', { title: "Welcome to the Awing Kingdom" });
});

// 2. PAGE ORIGINS
app.get('/origin', (req, res) => {
    db.all("SELECT * FROM culture WHERE category = 'Origin'", (err, rows) => {
        if (err) throw err;
        res.render('origin', { traditions: rows, title: "Our Origins & History" });
    });
});

// 3. PAGE MEALS
app.get('/meals', (req, res) => {
    db.all("SELECT * FROM culture WHERE category = 'Meals'", (err, rows) => {
        if (err) throw err;
        res.render('meals', { traditions: rows, title: "Royal Gastronomy" });
    });
});

// 4. PAGE CUSTOMS
app.get('/customs', (req, res) => {
    // Filtre les cérémonies et coutumes
    db.all("SELECT * FROM culture WHERE category = 'Ceremony' OR category = 'Customs'", (err, rows) => {
        if (err) throw err;
        res.render('customs', { traditions: rows, title: "Sacred Customs" });
    });
});

app.listen(3000, () => {
    console.log("Awing Culture site running at http://localhost:3000");
});