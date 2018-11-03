import * as creatureMonitor from "./src/creatureController";
import * as map from "./src/mapController";

creatureMonitor.createNewCreature("creat1", 15);
creatureMonitor.createNewCreature("creat2", 30);
creatureMonitor.createNewCreature("creat3", 120);
creatureMonitor.createNewCreature("creat4", 60);
creatureMonitor.createNewCreature("creat5", 45);
creatureMonitor.startMonitoring();

let intr = setInterval(function () {
    map.drawMap(creatureMonitor.creatureList);
}, 1000)