// #1) Big O only cares about the worst case
// Best case: Nemo is at the beginning
// Worst case: Nemo is the last entry

const fish = ["dory", "bruce", "marlin", "nemo"];
const nemo = ["nemo"];
const everyone = [
  "dory",
  "bruce",
  "marlin",
  "nemo",
  "gill",
  "bloat",
  "nigel",
  "squirt",
  "darla",
  "hank",
];
const large = new Array(10000).fill("nemo");

function findNemo(array) {
  for (let i = 0; i < array.length; i++) {
    console.log("");
    if (array[i] === "nemo") {
      console.log("Found Nemo!!!");
      break;
    }
  }
}
findNemo(large); // 0(n) --> Linear Time
