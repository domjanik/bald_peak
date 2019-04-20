import eventQuery from "./eventQuery/eventQuery";
import { addEvent } from '../../../../Matrix/src/eventQuery/eventQuery';
import move from "./eventQuery/events/move";
import directions from "./constants/directions";
import creatureController from "./controllers/creatureController";
import human from "./creatures/human";
import runApi from './api/api';

export async function initializeApplication() {
    runApi();   

    // creatureController.addCreature(new human({name: "test1", position: { axisX: 0, axisY: 0}}));
    // creatureController.addCreature(new human({name: "test2", position: { axisX: 0, axisY: 1}}));
    
    // setTimeout(()=>{
    //     eventQuery.addEvent(new move(creatureController.creatureList[1].id, directions.left, 1))
    //     eventQuery.addEvent(new move(creatureController.creatureList[1].id, directions.up, 1))
        
    // }, 5000)
}

