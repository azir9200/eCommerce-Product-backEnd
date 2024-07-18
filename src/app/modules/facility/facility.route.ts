import express from "express";
import { FacilityController } from "./facility.controller";

const router = express.Router();

router.post("/create-facility", FacilityController.createFacility);

export const facilityRouter = router;
