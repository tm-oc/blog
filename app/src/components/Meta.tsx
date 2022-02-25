import Head from 'next/head'

type Props = {
  children?: React.ReactNode
  title?: string
  description?: string
  image?: string
  type?: string
}

export const Meta = (props: Props) => {
  const { children } = props
  const description = props.description ?? ''
  const title = props.title ? `${props.title}` : `O`
  return (
    <>
      <Head>
        <meta name='apple-mobile-web-app-title' content='BLOG' />
        <link rel='shortcut icon' type='image/png' href='/images/icon.png' />
        <link
          rel='apple-touch-icon-precomposed'
          type='image/png'
          href='/images/icon.png'
        />
        <title>{title}</title>
        <meta name='robots' content='index,follow' />
        <meta name='description' content={description} />
        <meta property='og:title' content={title} />
        <meta property='og:description' content={description} />
        {children}
      </Head>
    </>
  )
}
