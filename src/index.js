const { PORT } = require("./config/secrets.config");
const api = require("./api");

api.listen(PORT, () => {
  console.log(`API is listening on port ${PORT}, send your traffic!`);
});
