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
    stmt.run("Origin", "The Ancestral Roots", "As most of the populations of the Ngemba region, The Awing people claim origins related to the great migrations of the Widikum. According to oral tradition, their ancerstors migrated towards the east in search for more fertile grounds and security against slave raids and tribal wars.", "origin.jpg");
    stmt.run("Origin", "The Legend of the Scission", "The history says the founder of Awing was a prince or a chief descending from a larger group. A dispute, often related to the succession or a hunting party would have caused a spliting. A grouped stayed or formed other Ngemba villages like Pinyin or Bamendjou. The group led by the ancestor of the Awing installed itself on the actual site, attracted par the mountain topography that offered a natural defense.");
    stmt.run("Origin", "The History of the name Awing", "At first, the village was not called Awing. The name is a colonial deformation or a linguistic evolution of the word Mewung or Awingne, that names the people and their dialect. In the local cosmogony, the village is intrinsically linked to its physical environment. During the colonial period (german then british), Awing preserved a great part of its cultural autonomy thanks to its steep relief and the solidarity of his people.");
    stmt.run("Origin", "Social organisation and royalty", "The village structured itself around a powerful chiefdom. The Fon of Awing is the guardian of traditions an the living link with the migrating ancestors. The social structure is divided into quarters, each controled by a second-in-command and notables (The Bukums), Ensuring a cohesion that lasts since centuries despite exterior influence.");
    stmt.run("Origin", "The Sacred Lake Awing", "A mystical site located at an altitude of 2000m. It is believed to be the home of the village spirits. It plays a central role in the rites for the foundation and legitimation of the Fon. Every year, traditional sacrifices a practiced there to ensure the fertility of the lands and peace in the village.", "lake.jpg");
    stmt.run("Origin", "The Dialect", "The dialect spoken the Awing people bears the same as the village : Awing, usually written awingne or called mbewing by the speakers, As the majority of cameroonian dialects, the meaning of a word can change radically depending on the intonation. It uses prefixes to organise nouns into categories (humans, objects, animals, etc.), a typical feature of bantoid languages.");
    
    // MEALS
    stmt.run("Meals", "Achuh (The Royal Yellow Soup)", "Achuh is the staple food of the Awing people. It consists of pounded cocoyams served with a rich, velvety yellow soup made from palm oil and limestone, seasoned with traditional spices.", "achuh.jpg");
    stmt.run("Meals", "Njamah-Njamah & Fufu", "A daily delicacy made from sautéed huckleberry leaves (Njamah-Njamah) often served with corn fufu. It represents the fertility of the Awing soil.", "fufu.jpg");

    // CUSTOMS
    stmt.run("Customs", "The Fon's Palace", "The heart of Awing administration. The Fon is the supreme traditional authority, supported by the 'Nchinda' (secret societies) who maintain order and justice. We don't shake hands with the Fon an we don't address him directly without going through a strict protocol. When a Fon \"disappears\" (we don't say that he dies), the choice of he successor is surrounded by mysteries and secret rites orchestrated by the notables.", "palace.jpg");
    stmt.run("Customs", "The Awing Lakes", "The awing lake is at the center of the village's biliefs. It's a sacred site where the gods and ancestors live. Rituals are organised there to request for rain, good harvests or the protection of the village. These ceremonies are led by the Fon and the great priests. There are strict restrictions concerning fishing or access to some parts of the lake, in order not to disturb the peace of the spirits.");
    stmt.run("Customs", "The Keleng Dance", "A prestigious dance performed during royal funerals or victory celebrations. It features dancers in elaborate traditional regalia moving to the rhythm of wooden drums.", "dance.jpg");

    stmt.finalize();
    console.log("Awing Cultural Database successfully initialized!");
});
db.close();