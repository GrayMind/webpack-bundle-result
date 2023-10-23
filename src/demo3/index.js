export default function funcB() {
  import("./a");
  console.log("in funcB");
}

funcB();
