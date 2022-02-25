import { GetStaticProps } from 'next'
import Link from 'next/link'

import 'highlight.js/styles/ir-black.css'
import { Layout, Meta } from 'components'
import { microcms } from 'lib'
import { About } from 'types'
import { highlightHtml, isDraft } from 'utils'

type Props = {
  highlightedBody?: string
  draftKey?: string
}

const AboutPage = ({ highlightedBody, draftKey }: Props) => {
  return (
    <>
      <Meta title='About' description='' image='' />
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
            {highlightedBody && (
              <article
                className='max-w-4xl my-4 pt-8 prose'
                dangerouslySetInnerHTML={{ __html: `${highlightedBody}` }}
              />
            )}
          </section>
        </main>
      </Layout>
    </>
  )
}

export default AboutPage

export const getStaticProps: GetStaticProps = async (context) => {
  const { previewData } = context
  const draftKey = isDraft(previewData)
    ? { draftKey: previewData.draftKey }
    : {}
  try {
    const data: About = await microcms.get({
      endpoint: 'about',
      queries: {
        ...draftKey,
      },
    })
    return {
      props: {
        about: data,
        highlightedBody: highlightHtml(data.body),
        ...draftKey,
      },
    }
  } catch (e) {
    return {
      props: {},
    }
  }
}
