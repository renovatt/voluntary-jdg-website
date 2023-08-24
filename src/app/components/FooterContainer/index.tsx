import { FooterContainerProps } from './types'

const FooterContainer = ({ children }: FooterContainerProps) => {
  return (
    <section className="container flex w-full flex-col items-center justify-center overflow-hidden">
      {children}
    </section>
  )
}

export default FooterContainer
