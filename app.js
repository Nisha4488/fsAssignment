const fs = require('fs');

// ## Challenge 1:
// Simply print the contents of the text file to the screen.
let challengeOneData= fs.readFileSync('./challenge1/info.txt', 'utf8')
console.log(challengeOneData)

// ## Challenge 2:
// Add the names of everyone in your group to the end of the text file.
fs.appendFileSync('./challenge2/info.txt', 'Nisha, David , Luke, Tony , John')
// let challengeTwoData=fs.readFileSync('./challenge2/info.txt', 'utf8')
// challengeTwoData += 'Nisha, David , Luke, Tony , John'
// fs.writeFileSync('./challenge2/info.txt', challengeTwoData)

// ## Challenge 3:
// The file was incorrectly named binfo.txt ... Rename it to info.txt (only using js!)
// fs.renameSync('./challenge3/binfo.txt', './challenge3/info.txt')

// ## Challenge 4:
// Create a new folder within the challenge4 folder called "copyfolder". Then copy info.txt into that folder.
// fs.mkdirSync('./challenge4/copyfolder')
fs.copyFileSync('./challenge4/info.txt', './challenge4/copyfolder/info.txt')

// ## Challenge 5:
// Replace all of the "-"'s inside the text file with spaces.

let challengeFiveData = fs.readFileSync('./challenge5/info.txt', 'utf8')
let stringReplace = challengeFiveData.replace(/-/g, " ")
fs.writeFileSync('./challenge5/info.txt' , stringReplace)

// ## Challenge 6:
// Display all files that end with ".txt". Don't hard code the file names!

let challengeSixData =fs.readdirSync('./challenge6')
let textFile = challengeSixData.filter(item => item.slice(item.length - 4)=='.txt')
console.log(textFile)
