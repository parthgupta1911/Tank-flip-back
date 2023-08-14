const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const port = process.env.PORT || 2000;

const uri = process.env.URI.replace("<password>", process.env.PASSWORD);
mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log(`connected to the database`);
  });
const app = require("./app");
const server = app.listen(port, () => {
  console.log(`started the server at port = ${port}`);
});
