import { NextApiRequest, NextApiResponse } from 'next'

import { microcms } from 'lib'
import { Blog } from 'types'
import { toStringId } from 'utils'

const previewBlog = async (req: NextApiRequest, res: NextApiResponse) => {
  if (
    !req.query.secret ||
    req.query.secret !== process.env.MICRO_CMS_PREVIEW_SECRET
  ) {
    return res.status(401).json({ message: 'Invalid query' })
  }
  const id = toStringId(req.query.id)
  const draftKey = toStringId(req.query.draftKey)
  if (!id || !draftKey) {
    return res.status(401).json({ message: 'Invalid query' })
  }
  try {
    const post: Blog = await microcms.get({
      endpoint: 'blog',
      contentId: id,
      queries: {
        fields: 'id',
        draftKey,
      },
    })
    if (!post) {
      return res.status(401).json({ message: 'Invalid query' })
    }
    res.setPreviewData({ ...post, draftKey })
    res.writeHead(307, { Location: `/${post.id}` })
    res.end()
  } catch (e) {
    return res.status(401).json({ message: 'Invalid query' })
  }
}

export default previewBlog
