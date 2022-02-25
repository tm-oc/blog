import Link from 'next/link'

export const Footer = () => (
  <>
    <footer className='w-full bg-gray-100 mt-10'>
      <div className='container flex justify-center p-4 md:py-10 mx-auto'>
        <Link href='/'>
          <a className='flex items-center'>
            <span className='text-md text-gray-400 font-semibold ml-2'>
              © {new Date().getFullYear()}
            </span>
          </a>
        </Link>
      </div>
    </footer>
  </>
)
