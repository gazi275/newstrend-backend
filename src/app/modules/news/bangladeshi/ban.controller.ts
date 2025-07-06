import catchAsync from "../../../utilis/catchAsync";
import { newsModel } from "./ban.model";
import sendResponse from "../../../utilis/sendResponse";
import { update } from "lodash";

export const BangladeshiController = catchAsync(async (req, res) => {
const news =await newsModel.insertMany(req.body);
sendResponse(res, {
    status: 200,
    message: "News created successfully",
    data: news,
    success: true
})
});

export const getBangladeshiController = catchAsync(async (req, res) => {
const news =await newsModel.find();
sendResponse(res, {
    status: 200,
    message: "News created successfully",
    data: news,
    success: true
})
})

export const deleteBangladeshiController = catchAsync(async (req, res) => {
    const news =await newsModel.findByIdAndDelete(req.params.id);
    sendResponse(res, {
        status: 200,
        message: "News deleted successfully",
        data: news,
        success: true
    })
})