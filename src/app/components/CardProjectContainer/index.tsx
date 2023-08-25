import { CardProjectContainerProps } from './types'

const CardProjectContainer = ({ children }: CardProjectContainerProps) => {
  return (
    <section className="mb-10 mt-2 flex flex-col items-start justify-start gap-10 md:flex-row">
      {children}
    </section>
  )
}

export default CardProjectContainer
