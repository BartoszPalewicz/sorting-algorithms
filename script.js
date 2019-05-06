// var canvas = document.getElementById("canvas");
// var c = canvas.getContext("2d");
// var w = canvas.width;
// var h = canvas.height;
// var x=0;

// function draw(){
//     c.clearRect(0, 0, w, h);
//     c.rect(x, 100, 100, 100);
//     c.fillStyle="#E00";
//     c.fill();
//     x++;
// }
// setInterval(draw, 30)


var arr = [];
var len = 10000
function shuffle(){
    for(var i=0; i<len; i++){
        arr[i]=parseInt(Math.floor(Math.random()*10000));
        //document.write(tab[i]+" ");
    }
}
function start(){
s=0;
s = Date.now();
}

function stop(str){
ms=0;
ms = Date.now(); 

document.write(str);
document.write(parseInt(ms-s));
document.write("<br>");
}

function swap(arr, i, j){
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
 }

function bublleSort(){
shuffle();
start();

for (var i = 0; i < len ; i++) {
  for(var j = 0 ; j < len - i - 1; j++){ 
    if (arr[j] > arr[j + 1]) {
        swap(arr, j, j+1)
    }
 }
}
// for(var i=0; i<len; i++)
// document.write(arr[i])
stop("bombel: ");
}

function selectSort(){
shuffle();
start();
for (i=0; i < len; i++){
    min = i;
    for (j=i+1; j < len; j++){
        if (arr[j] < arr[min]){
            min = j;
        }
    }
    if (i != min){
        swap(arr, i, min)
    }
}
stop("select: ");
}

function mergeSort(){
shuffle();
start();
function mergeSort (arr) {
    if (arr.length === 1) {
      // return once we hit an array with a single item
      return arr
    }
  
    const middle = Math.floor(arr.length / 2) // get the middle item of the array rounded down
    const left = arr.slice(0, middle) // items on the left side
    const right = arr.slice(middle) // items on the right side
  
    return merge(
      mergeSort(left),
      mergeSort(right)
    )
  }

  // compare the arrays item by item and return the concatenated result
  function merge (left, right) {
    let result = []
    let indexLeft = 0
    let indexRight = 0
  
    while (indexLeft < left.length && indexRight < right.length) {
      if (left[indexLeft] < right[indexRight]) {
        result.push(left[indexLeft])
        indexLeft++
      } else {
        result.push(right[indexRight])
        indexRight++
      }
    }
  
    return result.concat(left.slice(indexLeft)).concat(right.slice(indexRight))
  }
  mergeSort(arr);
stop("merge: ");
}
function quickSort(){
shuffle();
start();
function quickSort(arr, left, right){
    var pivot,
    partitionIndex;
 //var len = arr.length, 
 
   if(left < right){
     pivot = right;
     partitionIndex = partition(arr, pivot, left, right);
     
    //sort left and right
    quickSort(arr, left, partitionIndex - 1);
    quickSort(arr, partitionIndex + 1, right);
   }
   return arr;
 }
 function partition(arr, pivot, left, right){
    var pivotValue = arr[pivot],
        partitionIndex = left;
 
    for(var i = left; i < right; i++){
     if(arr[i] < pivotValue){
       swap(arr, i, partitionIndex);
       partitionIndex++;
     }
   }
   swap(arr, right, partitionIndex);
   return partitionIndex;
 }

    quickSort(arr, 0, len)
stop("quick: ");
}

function countSort(){
shuffle();
start();
function countingSort(arr){
    newArr= [];
    newArr2=[];
    for(var i=0; i<len; i++){
        if(newArr[arr[i]]==undefined){
            newArr[arr[i]]=1;
        }
        else{
            newArr[arr[i]]++;
        }
    }
    for(var i=0; i<newArr.length; i++) 
        for(var j=0; j<newArr[i]; j++)
            newArr2.push(i);
    arr=newArr2;

}
countingSort(arr)
stop("count: ");
// for(var i =0; i<arr.length; i++)
// document.write(arr[i]+";")
}

function insertSort() {
    shuffle();
    start();
    var countOuter = 0;
    var countInner = 0;
    var countSwap = 0;
  
    for(var i = 0; i < len; i++) {
      countOuter++;
      var temp = arr[i];
      var j = i - 1;
      while (j >= 0 && arr[j] > temp) {
        countInner++;
        countSwap++;
        arr[j + 1] = arr[j];
        j--;
      }
      arr[j + 1] = temp;
    }
    stop("insert: ")
    // for(var i =0; i<arr.length; i++)
    // document.write(arr[i]+";")    
  }


bublleSort();
selectSort();
mergeSort();
quickSort();
countSort();
insertSort();