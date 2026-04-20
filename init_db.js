const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./awing.db');

db.serialize(() => {
    db.run(`DROP TABLE IF EXISTS culture`);
    db.run(`CREATE TABLE culture (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        category TEXT,
        title TEXT,
        description TEXT,
        image_url TEXT
    )`);

    const stmt = db.prepare("INSERT INTO culture (category, title, description, image_url) VALUES (?, ?, ?, ?)");
    
    // ORIGINS
    stmt.run("Origin", "The Tikar Roots", "The Awing people, originally known as Awing-Bambuit, trace their ancestry back to the Tikar migrations. They settled in the Santa subdivision, establishing a powerful kingdom guided by ancestral wisdom.", "origin.jpg");
    stmt.run("Origin", "The Sacred Lake Awing", "A mystical site located at an altitude of 2000m. It is believed to be the home of the village spirits. To this day, the lake remains a site for traditional sacrifices and royal rituals.", "lake.jpg");
    
    // MEALS
    stmt.run("Meals", "Achuh (The Royal Yellow Soup)", "Achuh is the staple food of the Awing people. It consists of pounded cocoyams served with a rich, velvety yellow soup made from palm oil and limestone, seasoned with traditional spices.", "achuh.jpg");
    stmt.run("Meals", "Njamah-Njamah & Fufu", "A daily delicacy made from sautéed huckleberry leaves (Njamah-Njamah) often served with corn fufu. It represents the fertility of the Awing soil.", "fufu.jpg");

    // CUSTOMS
    stmt.run("Customs", "The Fon's Palace", "The heart of Awing administration. The Fon is the supreme traditional authority, supported by the 'Nchinda' (secret societies) who maintain order and justice.", "palace.jpg");
    stmt.run("Customs", "The Keleng Dance", "A prestigious dance performed during royal funerals or victory celebrations. It features dancers in elaborate traditional regalia moving to the rhythm of wooden drums.", "dance.jpg");

    stmt.finalize();
    console.log("Awing Cultural Database successfully initialized!");
});
db.close();