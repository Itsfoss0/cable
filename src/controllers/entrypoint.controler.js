const indexPointControllerFunction = (_req, res) => {
  res.json({ message: "hi there! from" });
};

const statusControllerFunction = (_req, res) => {
  res.json({ message: "API is up and running, ready for tasking" });
};

module.exports = {
  indexPointControllerFunction,
  statusControllerFunction,
};
