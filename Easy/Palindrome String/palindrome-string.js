//{ Driver Code Starts
//Initial Template for javascript

'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}

function main() {
    let t = parseInt(readLine());
    let i = 0;
    for(;i<t;i++)
    {
        let S = readLine().trim();
        let obj = new Solution();
        let res=obj.isPalindrome(S);
        console.log(res);
    
    }
}
// } Driver Code Ends


//User function Template for javascript

/**
 * @param {string} S
 * @return {number}
*/

class Solution {
    
    isPalindrome(S){
       let left = 0;
        let right = S.length - 1;

        while (left < right) {
            if (S[left] !== S[right]) {
                return 0; 
            }
            left++;
            right--;
        }

        return 1; 
    
    }
}

let sol = new Solution();