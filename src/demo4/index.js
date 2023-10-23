import utils from "./utils";
import { num } from "./utils";
console.log(num);
const result = utils.add(1, 2);
console.log(result);

import("./data").then(({ asyncData }) => {
  console.log(asyncData);
});
