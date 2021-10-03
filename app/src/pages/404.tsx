import { Layout, Meta } from 'components'

const Error404 = () => {
  return (
    <>
      <Meta title='404'>
        <meta name='robots' content='noindex'></meta>
      </Meta>
      <Layout>
        <main className='flex flex-col items-center justify-center w-full flex-1 px-20 text-center'>
          <div>
            <h1 className='inline-block align-middle md:border-r md:border-gray-200 text-2xl font-bold mr-3 pr-3 text-indigo-700'>
              404
            </h1>
            <div className='inline-block align-middle leading-9'>
              <h2 className='md:text-xl'>ページが見つかりませんでした。</h2>
            </div>
          </div>
        </main>
      </Layout>
    </>
  )
}

export default Error404
