import { createClient } from 'microcms-js-sdk'

export const microcms = createClient({
  serviceDomain: process.env.MICRO_CMS_DOMAIN || '',
  apiKey: process.env.MICRO_CMS_API_KEY || '',
})
