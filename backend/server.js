const express = require("express");

const app = express();

const PORT = 8000;

require("./routes")(app);

app.listen(PORT, (err) => {
  if (err) {
    return console.log(err);
  }
  console.log(`Server started on port ${PORT}`);
});
