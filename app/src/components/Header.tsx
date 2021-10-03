import Link from 'next/link'
import React, { useState } from 'react'

import { CloseIcon, Logo, MenuIcon, Transition } from 'components'

const menuList = [
  {
    label: 'about',
    link: '/about',
  },
]

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <>
      <header className='top-0 z-20 w-full border-gray-200 border-b-4'>
        <nav className='flex items-center justify-between h-16 px-4'>
          <Link href='/'>
            <a className='flex items-start group'>
              <Logo />
            </a>
          </Link>

          <ul className='hidden sm:flex font-medium items-end'>
            {menuList.map((content, i) => (
              <li key={i}>
                <Link href={content.link}>
                  <a className='ml-4 text-gray-500 hover:text-gray-900 text-sm font-semibold transition ease-in-out'>
                    {content.label}
                  </a>
                </Link>
              </li>
            ))}
          </ul>

          <div className='animate-slowfadein flex items-center sm:hidden'>
            <button
              type='button'
              onClick={() => setMenuOpen(true)}
              className='inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:text-gray-600 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-600 transition duration-150 ease-in-out'
            >
              <MenuIcon className='w-6 h-6' />
            </button>
          </div>
        </nav>

        <Transition
          show={menuOpen}
          enter='duration-150 ease-out'
          enterFrom='opacity-0 scale-95'
          enterTo='opacity-100 scale-100'
          leave='duration-100 ease-in'
          leaveFrom='opacity-100 scale-100'
          leaveTo='opacity-0 scale-95'
        >
          <div className='absolute top-0 inset-x-0 p-2 transition transform origin-top-right sm:hidden'>
            <div className='rounded-lg shadow-md border border-gray-200'>
              <div className='rounded-lg bg-white shadow-xs overflow-hidden'>
                <div className='px-5 pt-4 flex items-center justify-between'>
                  <Link href='/'>
                    <a
                      className='flex items-start group'
                      onClick={() => setMenuOpen(false)}
                    >
                      <Logo />
                    </a>
                  </Link>
                  <div className='-mr-2'>
                    <button
                      type='button'
                      onClick={() => setMenuOpen(false)}
                      className='inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:text-gray-600 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-600 transition duration-150 ease-in-out'
                    >
                      <CloseIcon className='w-6 h-6' />
                    </button>
                  </div>
                </div>
                <div className='px-2 pt-4 pb-3'>
                  {menuList.map((content, i) => (
                    <Link href={content.link} key={i}>
                      <a
                        onClick={() => setMenuOpen(false)}
                        className='block px-3 py-2 rounded-md text-base font-medium text-gray-500 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:text-gray-900 focus:bg-gray-100 transition duration-150 ease-in-out'
                      >
                        {content.label}
                      </a>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Transition>
      </header>
    </>
  )
}
