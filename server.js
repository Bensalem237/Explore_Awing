const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const app = express();
const db = new sqlite3.Database('./awing.db');

app.use(express.static('public'));
app.set('view engine', 'ejs');

// Shared Navigation Logic
app.get('/', (req, res) => {
    db.all("SELECT * FROM culture", (err, rows) => {
        res.render('index', { traditions: rows, title: "Home - The Awing Kingdom", headerTitle: "Explore Awing" });
    });
});

app.get('/origin', (req, res) => {
    db.all("SELECT * FROM culture WHERE category = 'Origin'", (err, rows) => {
        res.render('index', { traditions: rows, title: "Origins & History", headerTitle: "Our Roots" });
    });
});

app.get('/meals', (req, res) => {
    db.all("SELECT * FROM culture WHERE category = 'Meals'", (err, rows) => {
        res.render('index', { traditions: rows, title: "Traditional Cuisine", headerTitle: "Awing Tastes" });
    });
});

app.get('/customs', (req, res) => {
    db.all("SELECT * FROM culture WHERE category = 'Customs'", (err, rows) => {
        res.render('index', { traditions: rows, title: "Customs & Traditions", headerTitle: "Heritage" });
    });
});

app.listen(3000, () => {
    console.log("Awing Culture site running at http://localhost:3000");
});