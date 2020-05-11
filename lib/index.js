/* eslint-disable no-underscore-dangle */
/* eslint-disable import/no-dynamic-require */

const path = require("path");

const inquirer = require(path.join(__dirname, "../node_modules/", "inquirer"));
const deasync = require(path.join(__dirname, "../node_modules/", "deasync"));
const fs = require("fs");

const askAsync = (ask) => {
  let ret = false;
  let answer = {};

  inquirer.prompt(ask).then((answered) => {
    answer = answered;
    ret = true;
  });
  while (ret !== true) {
    deasync.sleep(25);
  }
  return answer;
};

// eslint-disable-next-line no-unused-vars
const process = async (obj, globalData) => {
  const _obj = obj["kalpa-inquirer"];
  let answer = {};

  if (Object.prototype.hasOwnProperty.call(_obj, "ask")) {
    answer = askAsync(_obj.ask);
  }

  if (
    Object.prototype.hasOwnProperty.call(_obj, "result") &&
    Object.prototype.hasOwnProperty.call(_obj.result, "file")
  ) {
    const file = path.join(globalData.playbookDir, _obj.result.file);
    fs.writeFileSync(file, JSON.stringify(answer));
  }
};

exports.process = process;
