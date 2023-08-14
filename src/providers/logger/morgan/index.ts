/* eslint-disable no-mixed-operators */
import { type ILogger } from '../ILogger'

import morgan from 'morgan'

export class LoggerProvider implements ILogger {
  logger: any
  constructor () {
    this.logger = morgan('tiny')
  }

  mainLog (): any {
    return this.logger
  }
}
