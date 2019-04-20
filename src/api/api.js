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
    'http://localhost:4200'
];
var corsOptions = {
    origin: function (origin, callback) {
        var isWhitelisted = originsWhitelist.indexOf(origin) !== -1;
        callback(null, isWhitelisted);
    },
    credentials: true
};
function runApi() {
    app.use(cors(corsOptions));
    app.use(bodyParser.json());
    app.get('/', (req, res) => res.send(objectController_1.default.getObjectList()));
    app.post('/creature/add', (req, res) => {
        let params = req.params;
        creatureController_1.default.addCreature(new human_1.default({ name: params.name, position: { axisX: 0, axisY: 1 } }));
        res.status(200).send();
    });
    app.listen(port, () => console.log(`Example app listening on port ${port}!`));
}
exports.default = runApi;
//# sourceMappingURL=api.js.map