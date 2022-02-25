import { Footer, Header } from 'components'

type Props = {
  children: React.ReactNode
}

export const Layout = ({ children }: Props) => (
  <>
    <div className='flex flex-col items-center justify-center min-h-screen'>
      <Header />
      {children}
      <Footer />
    </div>
  </>
)
