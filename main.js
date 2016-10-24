const fs = require('fs');

const stream = fs.createWriteStream('./app.js', 'utf-8');

const header = "" +
"const express = require('express');\n" +
"const bodyParser = require('body-parser');\n" +
"const app = express();\n" +
"app.use(bodyParser.json());\n\n";
stream.write(header);

// TODO

const footer = "app.listen(3000);\n";
stream.write(footer);

stream.end();
