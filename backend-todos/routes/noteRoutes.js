const express = require("express")
const router = express.Router()
const { protect } = require("../middleware/authMiddleware")
const {
    getNoteById,
    getNotes,
    CreateNote,
    DeleteNote,
    UpdateNote,
  } = require("../controllers/noteControllers")

// all crud operation routes

router.route("/").get(protect,getNotes);
router.route("/create").post(protect, CreateNote);
router
  .route("/:id")
  .get(getNoteById)
  .delete(protect, DeleteNote)
  .put(protect, UpdateNote);


module.exports = router;