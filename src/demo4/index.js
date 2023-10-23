import utils from "./utils";
import { num } from "./utils";
console.log(num);
import("./data").then(({ asyncData }) => {
  console.log(asyncData);
});

const result = utils.add(1, 2);
console.log(result);
