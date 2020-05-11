"use strict";
let path = require("path")
let modName = path.join(__dirname, "../node_modules/", "inquirer")
let mod = require(modName)
modName = path.join(__dirname, "../node_modules/", "deasync")
let mod1 = require(modName)
modName = path.join(__dirname, "../node_modules/", "deasync")
let mod2 = require(modName)

let inquirer = mod;
let deasync = mod1;
let fs = mod2



const askAsync = (ask) => {
  let ret = {};
  let answer = {};

  inquirer.prompt(ask)
    .then(fulfilled => {
      answer = fulfilled;
      ret = true;
    })
  while (ret !== true) {
    deasync.sleep(25);
  }
  return answer;
}

var exec = deasync(inquirer.prompt);
const process = async (obj, globalData) => {
  var _obj = obj["kalpa-inquirer"];
  let ret = {};
  let answer = askAsync(_obj.ask)
  console.log(answer)

};

exports.process = process;
