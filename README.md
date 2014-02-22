NodeJS Simplelogger
=================

## SUMMARY

This is a simple logger for NodeJS. Log to file and stdout - or just one of them

## USAGE

By default, the logger writes to stdout and to `logger.log`. To change this see instantiation.

### Instantiation:

    var logger = require('node-simplelogger');

    // This will only logg to your file: myLogFile.log
    logger.setOptions({
        consoleLog: false,
        file: __dirname + '/myLogFile.log'
    });

    // Only log to stdout
    logger.setOptions({
        consoleLog: true,
        file: false,
    });

### Logging:

To start logging. Simply do: 

    logger.log('Logging started');
    stdout: Logging started
    file  : Fri Feb 21 2014 22:30:49 GMT+0100 (CET) Logging started

    logger.log({myObject: 'object', another: 'object'});
    stdout: { "myObject":"object", 
              "another":"object" }
    file  : Fri Feb 21 2014 22:30:49 GMT+0100 (CET) { "myObject":"object", "another":"object" }

## LICENSE

MIT, see the LICENSE file