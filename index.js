const { logger } = require('./log/logManager');



// logger.log({
//     message: "Hello Winston",
//     level: "info"
// });

logger.info("To log 'info' level logs to the console");
logger.error("To log 'error' level logs to the console");
logger.debug("To log 'debug' level logs to the console");