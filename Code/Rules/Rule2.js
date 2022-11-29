// #2) Remove constants
// We dont care about how fast (steep) the line increases but how the line moves as inputs increase (linear)

function printFirstItemThenFirstHalfThenSayHi100Times(items) {
  console.log(items[0]);

  var middleIndex = Math.floor(items.length / 2);
  var index = 0;

  while (index < middleIndex) {
    console.log(items[index]);
    index++;
  }

  for (var i = 0; i < 100; i++) {
    console.log("hi");
  }
}
// Variable assignments and small calcs are ignored
// O(1 + n/2 + 100)
// Drop constants so O(n)
// O(2n) would be O(n)
