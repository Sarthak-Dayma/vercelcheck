import express from "express"; 
import { 
    addUsercontroller,
    getUsercontroller,
    getSingleUserController,
    edituserController,
    deleteuserController
} from "../controller/userController.js";

const router = express.Router();

// New route to fix "Cannot GET /"
router.get('/', (req, res) => {
    res.send("Welcome to the API");
});

router.post('/add', addUsercontroller);
router.get('/all', getUsercontroller);
router.get('/:id', getSingleUserController);
router.put('/:id', edituserController);  // Changed from POST to PUT
router.delete('/:id', deleteuserController);

export default router;
