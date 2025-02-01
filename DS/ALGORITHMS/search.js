// linear search 
// Linear Search is a method for searching an element in a collection of elements. In Linear Search, each element of the collection is visited one by one in a sequential fashion to find the desired element. Linear Search is also known as Sequential Search.

function linear(arr,t){
    for(let i=0;i<arr.length;i++){
        if(arr[i]===t){
            return i;
        }
    }
    return -1;
}

console.log(linear([23,43,12,542,124],124));  // 4

// Big O = O(n)...

// Binary Search -- using loops 
//  is a searching technique that works on the Divide and Conquer approach. It is used to search for any element in a sorted array. Compared with linear, binary search is much faster with a Time Complexity of O(logN), whereas linear search works in O(N) time complexity

function binary(arr,target){
    let left=0;
    let right=arr.length -1;
    while(left<=right){
        let mid=Math.floor((left+right)/2);
        if(target===arr[mid]){
            return mid;
        }
        else if(target>arr[mid]){
            left=mid+1;
        }
        else if(target<arr[mid]){
            right=mid-1;
        }
    }
    return -1;

}

console.log(binary([11,22,33,44,55,66,77],55));
// Time complexity  -- Big O = O(logn)


// using recurssion 
function binary_search(arr,target){
    return binary(arr,target,0,arr.length-1)
}
function binary(arr,target,left,right){
    if(left>right){
        return -1;
    }
    let mid=Math.floor((left+right)/2)
    if(target===arr[mid]){
        return mid;
    }
    else if(target>arr[mid]){
        return binary(arr,target,mid+1,right);
    }
    else if(target<arr[mid]){
        return binary(arr,target,left,mid-1);
    }
}

console.log(binary_search([11,22,33,44,55,66],44));
// Time complexity  -- Big O = O(logn)


