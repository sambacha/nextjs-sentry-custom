import { withSentry } from '@sentry/nextjs'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function (_req: NextApiRequest, res: NextApiResponse) {
const handler = async function (_req: NextApiRequest, res: NextApiResponse) {
  const response = { status: 200, message: 'Everything is okay!' }
  res.status(200).json(response)
}

export default withSentry(handler)