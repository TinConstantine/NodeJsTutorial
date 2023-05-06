import express from "express";
import { studentsController } from "../controllers/index.js";
const router = express.Router();
router.get("/", studentsController.getAllStudents);

router.get("/:id", studentsController.getStudentById);

router.post("/", studentsController.insertStudent);
// put k tim thay => k update , patch k tim thay => them moi
router.patch("/", studentsController.updateStudent);
router.put("/", (req, res) => {
  res.send("PUT insert students");
});
export default router;
