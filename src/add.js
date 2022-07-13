let data = require('./data.json');
const fs = require('fs');
let length = data.length;
const args = process.argv.slice(2);

const helpMessage = () => {
  console.log(`
    Usage: node add.js --title "Title" --text "Text"
  `);
}

if (args.length == 0 || args[0].indexOf('help') > -1) {
  helpMessage();
  return;
}

if (args[0] == '--title' && args[1] != '' && args[2] == '--text' && args[3] != '') {
  data.push(
    {
      id: data.length+1,
      title: args[1],
      text: args[3]
    }
  )
}

fs.writeFileSync('data.json', JSON.stringify(data));
