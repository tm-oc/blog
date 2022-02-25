import { GetStaticPaths, GetStaticProps } from 'next'
import Link from 'next/link'

import 'highlight.js/styles/ir-black.css'
import { CalenderIcon, Layout, Meta, UpdateIcon } from 'components'
import { microcms } from 'lib'
import { Blog } from 'types'
import {
  appConst,
  highlightHtml,
  isDraft,
  range,
  toStringId,
  utcToJST,
} from 'utils'

type Props = {
  blog: Blog
  highlightedBody: string
  draftKey?: string
}

const BlogPageId = ({ blog, highlightedBody, draftKey }: Props) => {
  return (
    <>
      <Meta title={blog.title} description={blog.caption} image='' />
      <Layout>
        {draftKey && (
          <div className='mt-5 p-4 bg-indigo-100 text-indigo-700 w-full flex justify-center'>
            <Link href={`/api/clear-preview`}>
              <a>現在プレビューモードで閲覧中です。 プレビューを解除する。</a>
            </Link>
          </div>
        )}
        <main className='relative antialiased w-full'>
          <section className='max-w-4xl flex flex-col mb-20 px-4 mx-auto min-h-screen'>
            <header>
              <h1 className='text-2xl sm:text-3xl font-bold mt-14 mb-6'>
                {blog.title}
              </h1>
              <p className='font-base text-gray-900'>{blog.caption}</p>
              <div className='my-4 text-gray-500'>
                <div className='flex items-center gap-2'>
                  <CalenderIcon className='h-4 w-4 text-indigo-700' />
                  {utcToJST(blog.publishedAt)}
                  {blog.publishedAt != blog.updatedAt && (
                    <>
                      <UpdateIcon className='h-4 w-4 text-indigo-700' />
                      {utcToJST(blog.updatedAt)}
                    </>
                  )}
                </div>
              </div>
            </header>
            <article
              className='max-w-4xl my-4 pt-8 border-t border-gray-200 prose'
              dangerouslySetInnerHTML={{ __html: `${highlightedBody}` }}
            />
          </section>
        </main>
      </Layout>
    </>
  )
}

export default BlogPageId

export const getStaticPaths: GetStaticPaths = async () => {
  const latestData: { totalCount: number } = await microcms.get({
    endpoint: 'blog',
    queries: { fields: 'id', offset: 0, limit: 1 },
  })
  const paths: string[] = []
  const pageArr = range(
    1,
    Math.ceil(latestData.totalCount / appConst.BLOG_PER_PAGE),
  )
  for await (const pageNum of pageArr) {
    const offset = (pageNum - 1) * appConst.BLOG_PER_PAGE
    const data: { contents: Blog[] } = await microcms.get({
      endpoint: 'blog',
      queries: {
        fields: 'id',
        offset: offset,
        limit: appConst.BLOG_PER_PAGE,
      },
    })
    data.contents.forEach((blog) => {
      paths.push(`/${blog.id}`)
    })
  }
  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { params, previewData } = context
  if (!params?.id) {
    return { notFound: true }
  }
  const id = toStringId(params.id)
  const draftKey = isDraft(previewData)
    ? { draftKey: previewData.draftKey }
    : {}
  try {
    const data: Blog = await microcms.get({
      endpoint: 'blog',
      contentId: id,
      queries: {
        fields: 'id,title,caption,body,publishedAt,updatedAt',
        ...draftKey,
      },
    })
    return {
      props: {
        blog: data,
        highlightedBody: highlightHtml(data.body),
        ...draftKey,
      },
    }
  } catch (e) {
    return { notFound: true }
  }
}
