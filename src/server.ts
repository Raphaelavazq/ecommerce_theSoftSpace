import dotenv from 'dotenv'
import express from 'express'
import next from 'next'
import nextBuild from 'next/dist/build'
import path from 'path'
import payload from 'payload'

import { seed } from './payload/seed'

dotenv.config({ path: '.env.local' })
// ...existing code...

const app = express()

// Ensure PORT is read from .env.local (defaults to 3001 in dev)
const PORT = parseInt(process.env.PORT || '3001', 10)

const start = async (): Promise<void> => {
  await payload.init({
    secret: process.env.PAYLOAD_SECRET || '',
    express: app,
    onInit: () => {
      payload.logger.info(`📦 Payload Admin URL: http://localhost:${PORT}/admin`)
    },
  })

  // Seed DB then exit
  if (process.env.PAYLOAD_SEED === 'true') {
    await seed(payload)
    process.exit(0)
  }

  // Production build flow
  if (process.env.NEXT_BUILD) {
    app.listen(PORT, async () => {
      payload.logger.info(`📦 Payload Admin URL: http://localhost:${PORT}/admin`)
      // @ts-expect-error
      await nextBuild(path.join(__dirname, '../'))
      process.exit(0)
    })
    return
  }

  // Dev / Prod server flow
  const nextApp = next({ dev: process.env.NODE_ENV !== 'production' })
  const nextHandler = nextApp.getRequestHandler()

  await nextApp.prepare()
  payload.logger.info('🚀 Next.js ready')

  app.all('*', (req, res) => nextHandler(req, res))

  app.listen(PORT, () => {
    payload.logger.info(`🚀 Frontend App URL: http://localhost:3000`)
  })
}

start().catch(err => {
  console.error(err)
  process.exit(1)
})
