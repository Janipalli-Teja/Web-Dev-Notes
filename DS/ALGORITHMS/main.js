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
