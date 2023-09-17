const app = require("./app");
const mongoose = require("mongoose");

require("dotenv").config();
const port = process.env.PORT;

(async () => {
  await mongoose.connect(process.env.MONGO_URI);
  console.log("mongoDB connected");
})();

app.listen(port, () => {
  console.log(`server running on port: ${port}`);
});
