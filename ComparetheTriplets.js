'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}


function compareTriplets(a, b) {

    var solutionA = 0
    var solutionB = 0
    for (let i = 0; i < a.length; i++) {
        if (a[i] > b[i]) {
            solutionA = solutionA + 1
        } else if (a[i] < b[i]) {
            solutionB = solutionB + 1
        }
    }
   
    let solution = solutionA +""+ solutionB
    return solution.split('');   

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const a = readLine().replace(/\s+$/g, '').split(' ').map(aTemp => parseInt(aTemp, 10));

    const b = readLine().replace(/\s+$/g, '').split(' ').map(bTemp => parseInt(bTemp, 10));

    const result = compareTriplets(a, b);

    ws.write(result.join(' ') + '\n');

    ws.end();
}