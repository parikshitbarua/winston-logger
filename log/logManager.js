const winston = require('winston');
require('winston-daily-rotate-file');

let transport = new (winston.transports.DailyRotateFile)({
    filename: './logs/%DATE%.log',
    datePattern: 'YYYY-MM-DD-HH',
    zippedArchive: true,
    maxSize: '20m',
    maxFiles: '14d'
});

const logConfiguration = {
    'transports': [
        // new winston.transports.File({
        //     level: 'info',
        //     filename: './logs/example.log'
        // })
        transport
    ],
    format: winston.format.combine(
        winston.format.label({
            label: `🏷LOGS`
        }),
        winston.format.timestamp({
            format: 'MMM-DD-YYYY HH:mm:ss'
        }),
        winston.format.printf(info => `${info.label}: ${[info.timestamp]}: ${info.level}: ${info.message}`),
    )
};
const logger = winston.createLogger(logConfiguration);


module.exports = {
    logger
};