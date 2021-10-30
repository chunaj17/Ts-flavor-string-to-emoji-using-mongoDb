import * as express from "express";
import { body, validationResult } from "express-validator";
import { createData, delId, getId, writeDummy } from "../controllers/write";
import { validateReq, validationRule } from "../middleware/validate";
const router = express.Router();
router
  .route("/")
  .post(validationRule("createId"), validateReq, createData)
  .patch(validationRule("requestId"), validateReq, writeDummy);
router.route("/:id").get(getId).delete(delId);
router.route("/json").get();
export = router;
