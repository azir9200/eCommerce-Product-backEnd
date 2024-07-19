import { Request, Response } from "express";
import { FacilityService } from "./facility.service";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import httpStatus from "http-status";

const createFacility = async (req: Request, res: Response) => {
  try {
    // const facilityData = req.body;
    const result = await FacilityService.createFacilityIntoDB(req.body);
    console.log(req.body, "req controller");
    res.status(200).json({
      success: true,
      message: "Facility created successfully !",
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Could not created Facilities!",
      error: err,
    });
  }
};

const getAllFacilities = catchAsync(async (req, res) => {
  const result = await FacilityService.getAllFacilityFromDB();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Academic semesters are retrieved successfully",
    data: result,
  });
});

const getSingleFacility = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await FacilityService.getSingleFacilityFromDB(id);
  console.log("single get, controller", result);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Single Facility is retrieved successfully",
    data: result,
  });
});

const deleteFacility = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await FacilityService.deleteFacilityFromDB(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Single Facility is retrieved successfully",
    data: result,
  });
});

const updateFacility = catchAsync(async (req, res) => {
  const { id } = req.params;
  const { facility } = req.body;
  const result = await FacilityService.updateFacilityIntoDB(id, facility);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Student is updated successfully",
    data: result,
  });
});

export const FacilityController = {
  createFacility,
  getAllFacilities,
  getSingleFacility,
  deleteFacility,
  updateFacility,
};
