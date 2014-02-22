/*jslint node: true */
'use strict';

var fs = require('fs');

var Logger = function() {};

var defaults = function(object, defaults) {
    for (var prop in defaults) {
        if (object[prop] === void 0) object[prop] = defaults[prop];
    }
    return object;
};

Logger.prototype.setOptions = function(options) {
    this.options = defaults(options || {}, {file: __dirname + '/logger.log', consoleLog: true});
    if (this.options.file) {
        this.logger  = fs.createWriteStream(this.options.file, { flags: 'a' });    
    }
},

Logger.prototype.log = function(message) {
    if (message) {
        if (!this.options) this.setOptions();
        
        if (this.options.consoleLog) console.log(message);
        if (this.logger) this.logger.write(new Date() + ' ' + JSON.stringify(message) + "\n");
    }
};

module.exports = new Logger();
