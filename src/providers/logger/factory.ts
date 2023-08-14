import { type ILogger } from './ILogger'
import { LoggerProvider } from './morgan'

const makeLoggerProvider = (): ILogger => new LoggerProvider()

export default makeLoggerProvider
