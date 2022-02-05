import { Router } from "express";
import { createData, delId, getId, writeDummy } from "../controllers/write";
import stringToEmoji from "../controllers/stringToEmoji";
import { validationRule } from "../middleware/validationRules";
import { validateReq } from "../middleware/validationResult";
const router = Router();
router
  .route("/")
  .post(validationRule("createId"), validateReq, createData)
  .patch(validationRule("requestId"), validateReq, writeDummy);
router
  .route("/users/:id")
  .get(validationRule("Id"), validateReq, getId)
  .delete(validationRule("Id"), validateReq, delId);
router
  .route("/convertString")
  .post(validationRule("stringValidate"), validateReq, stringToEmoji);

export = router;
