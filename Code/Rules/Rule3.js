// Different terms for inputs

function compressBoxesTwice(boxes, boxes2) {
  boxes.forEach(function (boxes) {
    console.log(boxes);
  });

  boxes2.forEach(function (boxes) {
    console.log(boxes);
  });
}

// O(a + b) because each input (boxes1 and boxes2) are given different terms
// Nested loops are multiplied (*), sibling loops are added (+)
