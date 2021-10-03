import { NextApiRequest, NextApiResponse } from 'next'

import { microcms } from 'lib'
import { About } from 'types'
import { toStringId } from 'utils'

const previewAbout = async (req: NextApiRequest, res: NextApiResponse) => {
  if (
    !req.query.secret ||
    req.query.secret !== process.env.MICRO_CMS_PREVIEW_SECRET
  ) {
    return res.status(401).json({ message: 'Invalid query' })
  }
  const draftKey = toStringId(req.query.draftKey)
  if (!draftKey) {
    return res.status(401).json({ message: 'Invalid query' })
  }
  try {
    const post: About = await microcms.get({
      endpoint: 'about',
      queries: {
        draftKey,
      },
    })
    if (!post) {
      return res.status(401).json({ message: 'Invalid query' })
    }
    res.setPreviewData({ ...post, draftKey })
    res.writeHead(307, { Location: `/about` })
    res.end()
  } catch (e) {
    return res.status(401).json({ message: 'Invalid query' })
  }
}

export default previewAbout
