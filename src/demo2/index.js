const funcA = require("./a");

function funcB() {
  funcA();
  console.log("in funcB");
}
funcB();
module.exports = funcB;
