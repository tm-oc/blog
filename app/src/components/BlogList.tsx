import Link from 'next/link'

import { CircleRightIcon, Layout, Meta, Pagination } from 'components'
import { Blog } from 'types'
import { utcToJST } from 'utils'

type Props = {
  contents: Blog[]
  totalCount: number
  currentPage: number
}

export const BlogList = ({ contents, totalCount, currentPage }: Props) => {
  return (
    <>
      <Meta title='Blog' description='' image='' />
      <Layout>
        <main className='relative antialiased w-full'>
          <section className='max-w-4xl mx-auto min-h-screen'>
            {contents.map((blog) => (
              <div
                key={blog.id}
                className='py-7 sm:py-14 mx-4 sm:grid grid-cols-4 border-t first:border-t-0 first:border-gray-200'
              >
                <p className='text-gray-500 mb-4'>
                  <span>{utcToJST(blog.publishedAt)}</span>
                </p>
                <Link href={`/${blog.id}`}>
                  <a className='col-span-3 block group'>
                    <h3 className='text-xl sm:text-2xl mb-4 font-bold text-gray-900'>
                      {blog.title}
                    </h3>
                    <p className='mt-3 text-base text-gray-500'>
                      {blog.caption}
                    </p>
                    <div className='mt-3'>
                      <CircleRightIcon className='sm:h-6 sm:w-6 h-5 w-5 text-indigo-700 group-hover:text-indigo-400 transition ease-in-out duration-150' />
                    </div>
                  </a>
                </Link>
              </div>
            ))}
          </section>
          <Pagination totalCount={totalCount} currentPage={currentPage} />
        </main>
      </Layout>
    </>
  )
}
