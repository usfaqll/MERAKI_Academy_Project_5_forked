const express = require("express");

const {createGym, 
    addNewUserInGym,
    addNewCoachInGym,
    getAllGymByUserId,
    getAllGym, 
    getAllUserInGym, 
    getAllCoachInGym, 
    deleteUserInGym,
    deleteCoachInGym,
    createPlan,
    getGymByOwner,
    getPlanByGymId,
    createRoomInGym,
    getRoomByIdRoom,
    getAllRoomByGymId} = require("../controllers/Gym");
    const authentication = require("../middleware/authentication");
const gymsRouter = express.Router();

gymsRouter.post("/", authentication ,createGym);
gymsRouter.get("/", authentication, getAllGym);
gymsRouter.get("/user/:userId", authentication, getAllGymByUserId);
gymsRouter.get("/:ownerId", authentication,getGymByOwner);
gymsRouter.post("/:gymid/plan/create", authentication,createPlan);
gymsRouter.get("/plan/:gymid", authentication ,getPlanByGymId);
gymsRouter.post("/gym/user",authentication, addNewUserInGym);
gymsRouter.get("/gym/user", authentication,getAllUserInGym);
gymsRouter.delete("/gym/user", authentication,deleteUserInGym);
gymsRouter.post("/gym/coach", authentication,addNewCoachInGym)
gymsRouter.get("/gym/coach",authentication, getAllCoachInGym);
gymsRouter.delete("/delete/coach", authentication,deleteCoachInGym)
gymsRouter.post("/:gymid/room/create", authentication,createRoomInGym);
gymsRouter.get("/:gymid/room/:roomid", authentication,getRoomByIdRoom);
gymsRouter.get("/:gymid/room/", authentication,getAllRoomByGymId);

module.exports = gymsRouter