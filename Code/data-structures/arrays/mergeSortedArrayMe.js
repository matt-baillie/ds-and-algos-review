// Sorting two already sorted arrays
// for a single unsorted array https://stackoverflow.com/questions/38331143/sort-an-array-containing-numbers-using-for-loop

const arrayCheck = (arr1, arr2) => {
  if (!arr1 || !arr2 || !Array.isArray(arr1) || !Array.isArray(arr2) || arr1.length === 0 || arr2.length === 0) {
    console.log('Does not compute')
    return (arr1 + arr2)
  }
}

// JS High Order Function .sort()
const mergeSortedArrays1 = (arr1, arr2) => {
  arrayCheck(arr1, arr2)
  return [...arr1, ...arr2]
    .sort((a, b) => {
      return a - b
    })
}

// Manual Sort loop
// blank array, goes through both arrays and merges them in a new array
// depending on which is larger, moves the array that array over by 1 but keeps the other array holding the same number to be compared again. 
// This is for already sorted arrays

const mergeSortedArrays2 = (arr1, arr2) => {
  arrayCheck(arr1, arr2)

  let sortedArray = []
  let array1Item = arr1[0]
  let array2Item = arr2[0]
  let i = 1
  let j = 1

  while (array1Item !== undefined || array2Item !== undefined) {
    // console.log(array1Item, array2Item)
    if (array2Item === undefined || array1Item < array2Item) {
      sortedArray.push(array1Item)
      array1Item = arr1[i];
      i++;
    } else {
      sortedArray.push(array2Item)
      array2Item = arr2[j];
      j++;
    }
  }
  return sortedArray

}


console.log(mergeSortedArrays2([0, 3, 4, 31], [0, 3, 4, 6, 30]))