#!/usr/bin/env node
const index = require("./index.js");

if (require.main === module) {
  index(process.argv[2]);
}
