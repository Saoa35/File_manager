const fs = require("fs");

module.exports = function (app) {
  function isFolder(part) {
    return fs.lstatSync(path).isSirectory() && fs.existsSync(path);
  }

  app.get("/", (req, res) => {
    const base = "./files/";
    let path = "";

    if (isFolder(base + path)) {
      let files = fs.readdirSync(base + path);
      res.json(files);
    }
  });
};
