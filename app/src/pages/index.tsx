import { GetStaticProps } from 'next'

import { BlogList } from 'components'
import { microcms } from 'lib'
import { Blog } from 'types'
import { appConst } from 'utils'

type Props = {
  contents: Blog[]
  totalCount: number
}

const BlogIndex = ({ contents, totalCount }: Props) => {
  return (
    <>
      <BlogList {...{ contents, totalCount, currentPage: 1 }} />
    </>
  )
}

export default BlogIndex

export const getStaticProps: GetStaticProps = async () => {
  const data: {
    contents: Blog[]
    totalCount: number
  } = await microcms.get({
    endpoint: 'blog',
    queries: {
      fields: 'id,title,caption,publishedAt,updatedAt',
      offset: 0,
      limit: appConst.BLOG_PER_PAGE,
    },
  })
  return {
    props: {
      contents: data.contents,
      totalCount: data.totalCount,
    },
  }
}
