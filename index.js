const fs = require('fs');
const path = require('path');

const inputStartFilePath = path.join(__dirname, 'start.txt');
const inputEndFilePath = path.join(__dirname, 'end.txt');
const outputFilePath = path.join(__dirname, 'ip_ranges_output.txt');

// (IP Range Start)
fs.readFile(inputStartFilePath, 'utf8', (err, startData) => {
  if (err) {
    console.error('Error reading start IP file:', err);
    return;
  }

  // (IP Range End)
  fs.readFile(inputEndFilePath, 'utf8', (err, endData) => {
    if (err) {
      console.error('Error reading end IP file:', err);
      return;
    }

    const startLines = startData.split('\n').map(line => line.trim()).filter(line => line !== '');
    const endLines = endData.split('\n').map(line => line.trim()).filter(line => line !== '');

    if (startLines.length !== endLines.length) {
      console.error('The number of lines in start and end IP files do not match.');
      return;
    }

    const combinedLines = startLines.map((start, index) => {
      const end = endLines[index];
      return `${start}-${end}`;
    });

    fs.writeFile(outputFilePath, combinedLines.join('\n'), 'utf8', err => {
      if (err) {
        console.error('Error writing output file:', err);
      } else {
        console.log('IP ranges successfully processed and saved to', outputFilePath);
      }
    });
  });
});
