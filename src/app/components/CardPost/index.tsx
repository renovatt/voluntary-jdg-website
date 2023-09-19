import Image from 'next/image'
import { CardPostProps } from './types'

const CardPost = ({
  title,
  subtitle,
  description,
  image,
  createdAt,
}: CardPostProps) => {
  return (
    <section className="container flex flex-col items-center justify-center gap-4 px-4 py-10 md:px-0">
      <h1 className="max-w-2xl text-center text-2xl font-semibold tracking-wider text-primary md:text-3xl">
        {title}
      </h1>
      <span className="text-xs text-secondary-500">{createdAt}</span>

      <article className="">
        <figure className="h-96 w-full">
          <Image
            src={image}
            width={1000}
            height={1000}
            className="h-full w-full rounded-t-lg object-cover"
            alt="post-image"
          />
        </figure>

        <h2 className="mt-16 text-2xl font-bold text-secondary">{subtitle}</h2>
        <p className="mt-4 text-base leading-9 text-secondary-500">
          {description}
        </p>
      </article>
    </section>
  )
}
export default CardPost
