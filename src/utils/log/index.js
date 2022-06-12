// const c = require('ansi-colors');

import chalk from 'chalk';
chalk.level = 1;

const infoTheme = chalk.green.inverse.bold;
const errorTheme = chalk.bgRed.bold.whiteBright;
const warningTheme = chalk.redBright;
const debugTheme = warningTheme.bold;
const traceTheme = errorTheme.underline.blackBright;
const needCheckTheme = chalk.yellowBright.inverse.bold;

export default class Log {
  // using for log normal for debug
  static Info = log => {
    console.log(log);
  };

  // using for log import information
  static Success = (log, isBeautyJson) => {
    let dataConsole = isBeautyJson
      ? JSON.stringify(log, null, 4)
      : JSON.stringify(log);
    console.info(infoTheme(` ---  SUCCESS: ${dataConsole}   --- `));
  };

  // using for log error
  static Error = log => {
    let dataConsole = JSON.stringify(log);
    console.error(errorTheme(` ---   ${dataConsole}   --- `));
  };

  // using for log import information
  static NeedCheck = log => {
    let dataConsole = JSON.stringify(log);
    console.info(
      needCheckTheme(
        ` ---  NEED CHECK AGAIN: ${infoTheme(dataConsole)}   --- `,
      ),
    );
  };
}
