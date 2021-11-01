import { Router } from "express";
import { createData, delId, getId, writeDummy } from "../controllers/write";
import dataSort from "../middleware/sort";
import { validateReq, validationRule } from "../middleware/validate";
import count from "../middleware/count";
import emojiToString from "../controllers/stringToEmoji";
const router = Router();
router
  .route("/")
  .post(validationRule("createId"), validateReq, createData)
  .patch(validationRule("requestId"), validateReq, writeDummy);
router
  .route("/users/:id")
  .get(validationRule("Id"), validateReq, getId)
  .delete(validationRule("Id"), validateReq, delId);
router.route("/json").get(count as any, dataSort as any, emojiToString as any);
export = router;
