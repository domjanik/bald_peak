import { creatureController } from "./src/creatureController";
import { mapController } from "./src/mapController";

const creatureMonitor = new creatureController();
const map = new mapController(creatureMonitor);

creatureMonitor.createNewCreature(15);
creatureMonitor.createNewCreature(30);
creatureMonitor.createNewCreature(120);
creatureMonitor.createNewCreature(60);
creatureMonitor.createNewCreature(45);

creatureMonitor.startMonitoring();
map.drawMap(creatureMonitor.creatureList);