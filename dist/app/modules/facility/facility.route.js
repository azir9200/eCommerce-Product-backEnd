"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.facilityRouter = void 0;
const express_1 = __importDefault(require("express"));
const facility_controller_1 = require("./facility.controller");
const router = express_1.default.Router();
router.post("/create-facility", facility_controller_1.FacilityController.createFacility);
router.get("/", facility_controller_1.FacilityController.getAllFacilities);
router.get("/:id", facility_controller_1.FacilityController.getSingleFacility);
router.delete("/:id", facility_controller_1.FacilityController.deleteFacility);
router.patch("/:id", facility_controller_1.FacilityController.updateFacility);
exports.facilityRouter = router;
