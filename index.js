const fs = require('fs');

const DEFAULT_LEVELS = ['INFO', 'WARN', 'ERROR'];
const DEFAULT_LEVEL = 'INFO';
const DEFAULT_FOLDER_PATH = './log';

var Logger = function (options) {
  this.fileName = options.fileName;
  this.includeDate = options.includeDate || true;
  // const dateFormat = options.dateFormat || 'HH:MM:SS DD/MM/YY';

  if (!this.fileName) {
    throw new Error('File name was not mentioned');
  }

  if (!fs.existsSync(DEFAULT_FOLDER_PATH)) {
    throw new Error('Could not find log folder. Open one first!');
  }
};

Logger.prototype.log = function (text, logLevel = DEFAULT_LEVEL) {
  if (!DEFAULT_LEVELS.includes(logLevel)) {
    throw new Error('Invalid log level. You can add custom levels upon initialization');
  }

  const fullPath = `${DEFAULT_FOLDER_PATH}/${this.fileName}`;
  const date = new Date(),
    h = String(date.getHours()).padStart(2, '0'),
    m = String(date.getMinutes()).padStart(2, '0'),
    s = String(date.getSeconds()).padStart(2, '0'),
    d = String(date.getDate()).padStart(2, '0'),
    mn = String(date.getMonth() + 1).padStart(2, '0'),
    y = date.getFullYear();
  text = `[${h}:${m}:${s} ${d}/${mn}/${y}]: (${logLevel}) ${text}`;
  if (fs.existsSync(fullPath)) {
    fs.appendFileSync(`${DEFAULT_FOLDER_PATH}/${this.fileName}`, text + '\n');
  } else {
    fs.writeFileSync(`${DEFAULT_FOLDER_PATH}/${this.fileName}`, text + '\n');
  }
};

module.exports = Logger;
