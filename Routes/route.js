import express  from "express";
import { addUsercontroller,getUsercontroller,getSingleUserController,edituserController,deleteuserController} from "../controller/userController.js";
const router =express.Router();

router.post('/add',addUsercontroller);
router.get('/all',getUsercontroller);
router.get('/:id',getSingleUserController);
router.post('/:id',edituserController);
router.delete('/:id',deleteuserController);

export default router;