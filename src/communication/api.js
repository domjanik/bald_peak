"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const creatureController_1 = require("../controllers/creatureController");
const human_1 = require("../creatures/human");
const objectController_1 = require("../controllers/objectController");
const app = express();
const port = 3000;
var originsWhitelist = [
    "http://localhost:4200"
];
const corsOptions = {
    origin: function (origin, callback) {
        callback(null, originsWhitelist.indexOf(origin) !== -1);
    }
};
app.use(cors(corsOptions));
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
const http = require("http").Server(app);
function runApi() {
    app.get("/", (req, res) => res.send(objectController_1.default.getObjectList()));
    app.post("/creature/add", (req, res) => {
        let params = req.body;
        creatureController_1.default.addCreature(new human_1.default({ name: params.name, position: { axisX: 0, axisY: 1 } }));
        res.status(200).send(req.body);
    });
    http.listen(port, () => console.log(`Example app listening on port ${port}!`));
    return http;
}
exports.default = runApi;
//# sourceMappingURL=api.js.map