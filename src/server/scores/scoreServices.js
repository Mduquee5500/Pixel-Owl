const fs = require('fs');
const path = require('path');

const scoresFile = path.join(__dirname, 'scores.json');

function getScores() {
  try {
    const data = fs.readFileSync(scoresFile, 'utf8');
    return JSON.parse(data);
  } catch (err) {
    return [];
  }
}

function saveScores(scores) {
  fs.writeFileSync(scoresFile, JSON.stringify(scores, null, 2));
}

module.exports = { getScores, saveScores };
