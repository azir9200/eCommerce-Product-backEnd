import express from "express";
import { FacilityController } from "./facility.controller";

const router = express.Router();

router.post("/create-facility", FacilityController.createFacility);

router.get("/", FacilityController.getAllFacilities);

router.get("/:id", FacilityController.getSingleFacility);

router.delete("/:id", FacilityController.deleteFacility);

router.patch("/:id", FacilityController.updateFacility);

export const facilityRouter = router;
