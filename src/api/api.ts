import * as express from "express";
import * as cors from "cors";
import creatureController from "../controllers/creatureController";
import human from "../creatures/human";

const app = express();
const port = 3000;

var originsWhitelist = [
  'http://localhost:4200'
];
var corsOptions = {
  origin: function(origin, callback){
        var isWhitelisted = originsWhitelist.indexOf(origin) !== -1;
        callback(null, isWhitelisted);
  },
  credentials:true
}

export default function runApi(){
    app.use(cors(corsOptions));
    app.get('/', (req, res) => res.send('Hello World!'));
    app.post('/creature/add', (req, res) => {
        let params = req.params;
        creatureController.addCreature(new human({name: params.name, position: { axisX: 0, axisY: 1}}));
    });
    app.listen(port, () => console.log(`Example app listening on port ${port}!`));
}