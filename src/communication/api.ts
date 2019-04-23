import * as express from "express";
import * as cors from "cors";
import * as bodyParser from "body-parser";

import creatureController from "../controllers/creatureController";
import human from "../creatures/human";
import objectController from "../controllers/objectController";

const app = express();
const port = 3000;
var originsWhitelist = [
  "http://localhost:4200"
];
const corsOptions = {
  origin: function(origin, callback){
    callback(null, originsWhitelist.indexOf(origin) !== -1);
  }
}
app.use(cors(corsOptions));
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json())
const http = require("http").Server(app);

export default function runApi() {
    app.get("/", (req, res) => res.send(objectController.getObjectList()));
    app.post("/creature/add", (req, res) => {
        let params = req.body;
        creatureController.addCreature(new human({name: params.name, position: { axisX: 0, axisY: 1}}));
        res.status(200).send(req.body);
    });
   http.listen(port, () => console.log(`Example app listening on port ${port}!`));
   return http;    
}
