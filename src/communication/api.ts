import * as express from "express";
import * as cors from "cors";
import * as bodyParser from "body-parser";

import obstacleController from "../controllers/obstacleController"
import creatureController from "../controllers/creatureController";
import human from "../creatures/human";
import objectController from "../controllers/objectController";
import eventQuery from "../eventQuery/eventQuery";
import MoveEvent from '../eventQuery/events/move';
import AddItemEvent from '../eventQuery/events/addItem';
import RemoveItemEvent from '../eventQuery/events/removeItem';
import UseItemEvent from '../eventQuery/events/useItem';
import creature from "../creatures/creature";
import directions from '../constants/directions';
import obstacle from "../objects/obstacle";

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
        creatureController.addCreature(new human({name: params.name, lifetime: params.lifetime, position: { axisX: 0, axisY: 1}}));
        res.status(200).send(req.body);
    });
    app.post("/creature/move", (req, res) => {
      let params = req.body;
      let creature = <creature>objectController.getObjectById(params.id);
      eventQuery.addEvent(new MoveEvent(creature.id, params.direction, creature.speed));
      res.status(200).send(req.body);
    });
    app.post("/obstacle/add", (req, res) => {
        let params = req.body;
        obstacleController.addObstacle(new obstacle(params.axisX,params.axisY));
        res.status(200).send(req.body);
    });
    app.post("/item/add", (req, res) => {
        let params = req.body;
        eventQuery.addEvent(new AddItemEvent(params.id, params.id, params.item));
        res.status(200).send(req.body);
    });
    app.post("/item/use", (req, res) => {
      let params = req.body;
      eventQuery.addEvent(new UseItemEvent(params.id, params.id, params.item));

      res.status(200).send(req.body);
    });
    app.post("/item/remove", (req, res) => {
      let params = req.body;
      eventQuery.addEvent(new RemoveItemEvent(params.id, params.id, params.item));

      res.status(200).send(req.body);
    });
    
    
    http.listen(port, () => console.log(`Example app listening on port ${port}!`));
    return http;    
}
