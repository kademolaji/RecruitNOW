// @description     Get all jobs
// @route           GET /api/v1/jobs
// @access          Public
exports.getAllJobs = (req, res, next) => {
  res.status(200).json({ success: true, message: "Show all jobs" });
};

// @description     Get  job detail
// @route           GET /api/v1/jobs/:id
// @access          Public
exports.getJobDetails = (req, res, next) => {
  res.status(200).json({
    success: true,
    message: `Get job with id ${req.params.id} `
  });
};

// @description     Create new job
// @route           GET /api/v1/jobs
// @access          Public
exports.createNewJob = (req, res, next) => {
  res.status(200).json({ success: true, message: "create new job" });
};

// @description     Update job
// @route           GET /api/v1/jobs
// @access          Public
exports.updateJob = (req, res, next) => {
  res.status(200).json({
    success: true,
    message: `update job with id ${req.params.id}`
  });
};

// @description     Delete job
// @route           GET /api/v1/jobs
// @access          Public
exports.deleteJob = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, message: `Delete job with id ${req.params.id}` });
};
