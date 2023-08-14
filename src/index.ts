import * as dotenv from 'dotenv'
import express from 'express'
import 'express-async-errors'
import { router } from './routes'
import errorHandler from '@/middlewares/errorHandler'
import makeLoggerProvider from './providers/logger/factory'

dotenv.config()
const app = express()
app.use(express.json())
app.use(makeLoggerProvider().logger)

app.use(router)
app.use(errorHandler)
app.listen(process.env.APP_PORT ?? 3000, () => { console.log('App is running') })

export default app
