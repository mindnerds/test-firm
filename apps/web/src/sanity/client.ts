import { createClient } from '@sanity/client'

const projectId = '9iuld21r'
const dataset = 'production'

export const client = createClient({
  projectId,
  dataset,
  apiVersion: '2026-02-01',
  useCdn: true,
})
