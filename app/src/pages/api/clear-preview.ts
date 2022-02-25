import type { NextApiRequest, NextApiResponse } from 'next'

const clearPreview = async (req: NextApiRequest, res: NextApiResponse) => {
  res.clearPreviewData()
  res.writeHead(307, { Location: '/' })
  res.end()
}

export default clearPreview
