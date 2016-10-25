const fs = require('fs');

if (process.argv.length < 3) {
  console.log("input json name.")
  return;
}
const jsonFile = process.argv[2];

const stream = fs.createWriteStream('./app.js', 'utf-8');

const header = "" +
"const express = require('express');\n" +
"const bodyParser = require('body-parser');\n" +
"const app = express();\n" +
"app.use(bodyParser.json());\n\n";
stream.write(header);

const jsonString = fs.readFileSync(jsonFile, 'utf-8');
const datas = JSON.parse(jsonString);
datas.forEach((data) => {
  let method = "";
  method += "app." + data.method.toLowerCase() + "(\"" + data.path + "\", (req, res) => {\n";

  // TODO: create stub

  method += "});\n\n";
  stream.write(method);
});

const footer = "app.listen(3000);\n";
stream.write(footer);

stream.end();
