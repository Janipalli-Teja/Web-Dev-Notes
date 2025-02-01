// sorting algorithms 
/*
1) Bubble Sort 
2)Insertion Sort
3)Quick Sort
4)Merge Sort
*/

// Bubble sort 
// Bubble sort algorithm is an algorithm that sorts an array by comparing two adjacent elements and swapping them if they are not in the intended order. Here order can be anything like increasing or decreasing.
// increaing order
arr=[141,21,86,23,97,23,86,23,86]
for(let i=0;i<arr.length-1;i++){
    for(let j=0;j<arr.length;j++){
        let temp;
        if(arr[j]>arr[j+1]){
            temp=arr[j];
            arr[j]=arr[j+1];
            arr[j+1]=temp;
        }
    }
}
console.log(arr);

// decresing order 
arr=[141,21,86,23,97,23,86,23,86]
for(let i=0;i<arr.length-1;i++){
    for(let j=0;j<arr.length;j++){
        let temp;
        if(arr[j]<arr[j+1]){
            temp=arr[j];
            arr[j]=arr[j+1];
            arr[j+1]=temp;
        }
    }
}
console.log(arr);


// Insertion Sort 
// Insertion sort is a simple sorting algorithm that works by iteratively inserting each element of an unsorted list into its correct position in a sorted portion of the list. It is a stable sorting algorithm, meaning that elements with equal values maintain their relative order in the sorted output
arr=[64,12,75,23,87,23,75,34,86,36]
function insertion(arr){
    
    for(let i=1;i<arr.length;i++){
        let temp=arr[i];
        j=i-1;
        while(temp<arr[j] && j>=0){         //while(temp<arr[j] && j>=0    -- for decreasing order..
            arr[j+1]=arr[j];
            j--;
        }
        arr[j+1]=temp;
    }
    return arr
}
console.log(insertion(arr));



// quick sort
function partition(arr, lb, ub) {
    let pivot = arr[lb];
    let start = lb;
    let end = ub;
    
    while (start < end) {
        while (start < arr.length && arr[start] <= pivot) {
            start++;
        }
        while (arr[end] > pivot) {
            end--;
        }
        if (start < end) {
            swap(arr, start, end);
        }
    }
    swap(arr, lb, end);
    return end;
}

function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

function quicksort(arr, lb, ub) {
    if (lb < ub) {
        let loc = partition(arr, lb, ub);
        quicksort(arr, lb, loc - 1);
        quicksort(arr, loc + 1, ub);
    }
}

// Example usage:
let array = [23, 1, 43, 2, 54, 28, 6, 10];
quicksort(array, 0, array.length - 1);
console.log(array);
