import Link from 'next/link'

import { ChevronLeftIcon, ChevronRightIcon } from 'components'
import { appConst, range } from 'utils'

type Props = {
  totalCount: number
  currentPage: number
  perPage?: number
}

export const Pagination = ({
  totalCount,
  currentPage,
  perPage = appConst.BLOG_PER_PAGE,
}: Props) => {
  if (totalCount <= perPage) {
    return null
  }
  const maxPage = Math.ceil(totalCount / perPage)
  return (
    <div className='max-w-4xl mx-auto flex justify-between mt-10 px-4'>
      <div className='w-6'>
        {currentPage > 1 && (
          <Link href={`/page/${currentPage - 1}`}>
            <a className='flex pt-3'>
              <ChevronLeftIcon className='w-6 h-6 text-gray-500 hover:text-gray-900' />
            </a>
          </Link>
        )}
      </div>
      <ul className='flex'>
        {range(1, maxPage).map((number, index) => {
          const isActive = currentPage === number
          return (
            <li key={index}>
              <Link href={`/page/${number}`}>
                <a
                  className={`w-8 h-8 text-center flex items-center justify-center pt-4 ${
                    isActive
                      ? 'text-indigo-700 border-t-4 border-indigo-700 -mt-0.5'
                      : 'text-gray-500 hover:text-gray-900'
                  }`}
                >
                  {number}
                </a>
              </Link>
            </li>
          )
        })}
      </ul>
      <div className='w-6'>
        {currentPage < maxPage && (
          <Link href={`/page/${currentPage + 1}`}>
            <a className='flex pt-3'>
              <ChevronRightIcon className='w-6 h-6 text-gray-500 hover:text-gray-900' />
            </a>
          </Link>
        )}
      </div>
    </div>
  )
}
