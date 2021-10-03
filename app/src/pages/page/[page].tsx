import { GetStaticProps } from 'next'

import { BlogList } from 'components'
import { microcms } from 'lib'
import { Blog } from 'types'
import { appConst, range } from 'utils'

type Props = {
  contents: Blog[]
  totalCount: number
  currentPage: number
}

const BlogPageIndex = ({ contents, totalCount, currentPage }: Props) => {
  return (
    <>
      <BlogList {...{ contents, totalCount, currentPage }} />
    </>
  )
}

export default BlogPageIndex

export const getStaticPaths = async () => {
  const data: { totalCount: number } = await microcms.get({
    endpoint: 'blog',
    queries: { fields: 'id', offset: 0, limit: 1 },
  })
  const paths = range(1, Math.ceil(data.totalCount / appConst.BLOG_PER_PAGE)).map(
    (i) => `/page/${i}`,
  )
  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async (context) => {
  const page = context.params?.page as string
  const offset = (Number(page) - 1) * appConst.BLOG_PER_PAGE
  const data: {
    contents: Blog[]
    totalCount: number
  } = await microcms.get({
    endpoint: 'blog',
    queries: {
      fields: 'id,title,caption,publishedAt,updatedAt',
      offset: offset,
      limit: appConst.BLOG_PER_PAGE,
    },
  })
  return {
    props: {
      contents: data.contents,
      totalCount: data.totalCount,
      currentPage: Number(page),
    },
  }
}
