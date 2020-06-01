/* eslint-disable no-underscore-dangle */
/* eslint-disable import/no-dynamic-require */

const path = require("path");
const inquirer = require("inquirer");
const deasync = require("deasync");
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
const process = async (obj) => {
  const _obj = obj.node["kalpa-inquirer"];
  const ctx = obj.ctx === undefined ? {} : obj.ctx;
  let answer = {};

  if (Object.prototype.hasOwnProperty.call(_obj, "ask")) {
    answer = askAsync(_obj.ask);
  }

  if (
    Object.prototype.hasOwnProperty.call(_obj, "result") &&
    Object.prototype.hasOwnProperty.call(_obj.result, "file")
  ) {
    const file = path.join(ctx.cwd, _obj.result.file);
    fs.writeFileSync(file, JSON.stringify(answer));
  }
};

exports.process = process;
