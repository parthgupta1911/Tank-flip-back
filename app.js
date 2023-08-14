const app = require("express")();

app.use((req, res, next) => {
  //middleware
  next();
});
app.use((req, res, next) => {
  res.status(200).json({
    status: "success",
    message: "abhi k liya itna hi",
  });
});
module.exports = app;
