//{ Driver Code Starts
// Initial Template for javascript

'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => { inputString += inputStdin; });

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(
        string => { return string.trim(); });

    main();
});

function readLine() {
    return inputString[currentLine++];
}

function printList(res, n) {
    let s = "";
    for (let i = 0; i < n; i++) {
        s += res[i];
        s += " ";
    }
    console.log(s);
}

function main() {
    let t = parseInt(readLine());
    let i = 0;
    for (; i < t; i++) {
        let n = parseInt(readLine());
        let arr = new Array(n);
        let input_ar1 = readLine().split(' ').map(x => parseInt(x));
        for (let i = 0; i < n; i++) {
            arr[i] = input_ar1[i];
        }
        let obj = new Solution();
        let res = obj.arraySortedOrNot(arr, n);
        if (res === true) {
            console.log(1);
        } else {
            console.log(0);
        }
    }
} // } Driver Code Ends

// } Driver Code Ends


// User function Template for javascript

/**
 * @param {number[]} arr
 * @param {number} n
 * @returns {boolean}
*/

class Solution {
    arraySortedOrNot(arr, n) {
     for (let i = 0; i < n - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                return false; 
            }
        }
        return true; 
       
}
}

let sol = new Solution();