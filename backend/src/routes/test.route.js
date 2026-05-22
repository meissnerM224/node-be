import { Router } from "express";
import { runTest } from "../controller/test.controller.js";
const router = Router();

router.route("/").get(runTest);

export default router;
