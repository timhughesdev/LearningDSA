export function mergeTwoArr(arr1, arr2) {
  var mergedArr = [];

  //Edge Case: both arrays are empty
  if (arr1.length == 0 && arr2.length == 0) {
    return mergedArr;
  }
  console.log(arr1);
  console.log(arr2);
  //Edge Case: arr1 is shorter or less than arr2
  if (arr1.length == 0) {
    return (mergedArr = arr2.slice([0, arr2.length]));
  }

  //Edge Case: arr2 is shorter or less than arr1
  if (arr2.length == 0) {
    return (mergedArr = [...arr2]);
  }

  let endLoop = !true;
  let index1 = 0;
  let index2 = 0;
  let mergedIndex = 0;
  console.log("line 24's merged index =", mergedIndex);
  while (!endLoop) {
    if (index1 >= arr1.length - 1) {
      mergedArr[mergedIndex] = arr2[index2];
      index2++;
      mergedIndex++;
    } else if (index2 >= arr2.length - 1) {
      mergedArr[mergedIndex] = arr1[index1];
      index1++;
      mergedIndex++;
    } else if (arr1[index1] < arr2[index2]) {
      mergedArr[mergedIndex] = arr1[index1];
      index1++;
      mergedIndex++;
    } else if (arr1[index1] > arr2[index2]) {
      mergedArr[mergedIndex] = arr2[index2];
      index2++;
      mergedIndex++;
    } else {
      mergedArr[mergedIndex] = arr1[index1];
      mergedIndex++;
      mergedArr[mergedIndex] = arr2[index2];
      index1++;
      index2++;
      mergedIndex++;
    }
    console.log("index1's  loop", index1);
    console.log("index2's  loop", index2);
    let doneArr1 = index1 == arr1.length - 1;
    let doneArr2 = index2 == arr2.length - 1;
    endLoop = doneArr1 && doneArr2;
  }
  console.log("mergedArr =", mergedArr);
  return mergedArr;
}

export function arrAssignments() {
  let arr1 = [1, 3, 5, 22, 33, 44];
  let arr2 = [23, 28, 44, 44, 57, 87, 800, 900, 999];
  let arr3 = [44, 22, 31, 86, 42, 100];
  let arr4 = [132, 5, 17, 2, 37, 284];
  let arrEmpty = [];
  let mergeArr = mergeTwoArr(arr1, arr2);
  console.log(mergeArr);
  arrSort(arr3, false);
  arrSort(arr4, true);
  console.log(`sortedArr3=${arr3}`);
  console.log(`sortedArr4=${arr4}`);
  twoNumber(arr2, 88);
  console.log(`twoNumber=${twoNumber(arr2, 923)}`);
  // let mergeSortedArr = mergeTwoArr(sortedArr3, sortedArr4);
}

function swap(arr, i, j) {
  let tmp = arr[i];
  arr[i] = arr[j];
  arr[j] = tmp;
}

// passed by value(JS) & passed by reference
export function arrAscendingSort(arr) {
  for (let i = 1; i < arr.length; i++)
    for (let j = 0; j < i; j++)
      if (arr[i] < arr[j]) {
        swap(arr, i, j);
      }
}
export function arrReverseSort(arr) {
  for (let i = 1; i < arr.length; i++)
    for (let j = 0; j < i; j++)
      if (arr[i] > arr[j]) {
        swap(arr, i, j);
      }
}

export function arrSort(arr1, doReverse) {
  let arr1sort;
  if (doReverse) {
    arr1sort = arrReverseSort(arr1);
  } else {
    arr1sort = arrAscendingSort(arr1);
  }
  return arr1sort;
}

export function twoNumber(arr, target) {
  for (let i = 0; i < arr.length; i++)
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        return [i, j];
      }
    }
}

// //// TwoNumber ////
// export function twoNumber(nums, target) {
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       if (nums[i] + nums[j] === target) {
//         return [i, j];
//       }
//     }
//   }
// }
