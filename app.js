const express = require("express");
const cors = require("cors");
const app = express();
const port = 3001;

var corsOptions = {
    origin: "http://localhost:3000"
};
app.use(cors(corsOptions));

// парсинг json req
app.use(express.json());

// получение данных о бд
const db = require("./app/util/db");
const models = require("./app/models/relations/relations")

// синхронизация модели бд с бд
sequelize.sync()
    .then(() => {
        console.log("Synced db.");
    })
    .catch((err) => {
        console.log("Failed to sync db: " + err.message);
    });
// подключение

require("./app/routers/router.js")(app);
app.listen(port, () => {
    console.log(`Server is running on port ${port}.`);
});

