var runtime = require('system-runtime');

// install the system
var systemId = runtime.install({{system}});
// set the level of log
runtime.require('logger').level('{{logLevel}}');
// start the system
runtime.start(systemId);