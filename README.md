# dr-logger
A very basic logging system used for https://drsteam.net/

## Installing
Run the following command in your shell:
```
npm install dr-logger
```

## How to use?
Using this package is very straightforward. First, you must create 'log' folder in your project directory.
Then, simply import the package:
```
const Logger = require('dr-logger');
```

Create an instance and start logging!
```
const myLogger = new Logger({
    fileName: 'myLog.log'
});
myLogger.log('Hello World', 'INFO');
// /log/myLog.log: '[12:23:14 05/05/2020]: (INFO) Hello World'
```

## Log Levels
Default level is 'INFO'.
```
const DEFAULT_LEVELS = ['INFO', 'WARN', 'ERROR'];
```

