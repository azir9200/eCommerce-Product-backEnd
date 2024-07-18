import { Request, Response } from "express";
import { FacilityService } from "./facility.service";

const createFacility = async (req: Request, res: Response) => {
  try {
    const facilityData = req.body;
    const result = await FacilityService.createFacilityIntoDB(facilityData);
    res.status(200).json({
      success: true,
      message: "Users are fetched successfully !",
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Could not fetch Users!",
      error: err,
    });
  }
};

export const FacilityController = {
  createFacility,
};
