

var arr = [];
var len = 10000
function shuffle(){
    for(var i=0; i<len; i++){
        arr[i]=parseInt(Math.floor(Math.random()*10000));
        
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
document.write("ms <br>");
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
      
      return arr
    }
  
    const middle = Math.floor(arr.length / 2) 
    const left = arr.slice(0, middle) 
    const right = arr.slice(middle) 
  
    return merge(
      mergeSort(left),
      mergeSort(right)
    )
  }

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
 
 
   if(left < right){
     pivot = right;
     partitionIndex = partition(arr, pivot, left, right);
     
    
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
 
  }


bublleSort();
selectSort();
mergeSort();
quickSort();
countSort();
insertSort();
