const express = require("express");

const {
  getAllJobs,
  getJobDetails,
  createNewJob,
  updateJob,
  deleteJob
} = require("../controllers/jobs");

const router = express.Router();

router
  .route("/")
  .get(getAllJobs)
  .post(createNewJob);
router
  .route("/:id")
  .get(getJobDetails)
  .put(updateJob)
  .delete(deleteJob);

module.exports = router;
