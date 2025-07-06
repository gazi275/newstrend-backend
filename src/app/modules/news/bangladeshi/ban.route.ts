import  express  from "express";
import { BangladeshiController, deleteBangladeshiController, getBangladeshiController } from "./ban.controller";
const router = express.Router();
router.post("/", BangladeshiController);
router.delete("/:id", deleteBangladeshiController);
router.get("/", getBangladeshiController);

export const Localnews = router;