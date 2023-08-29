import Link from 'next/link'
import Image from 'next/image'
import { CardProjectsProps } from './types'
import { BsArrowUpRight } from 'react-icons/bs'

const CardProjects = ({
  tittle,
  src,
  href,
  description,
  side,
}: CardProjectsProps) => {
  return (
    <section
      data-testid="card-project"
      className={`flex h-full w-full flex-col items-center justify-center md:w-1/2 ${
        side ? 'md:mt-28' : 'md:mt-0'
      }`}
    >
      <article className="h-full w-full">
        <figure>
          <Image
            src={src}
            alt={tittle + '-image'}
            className="h-full w-full bg-secondary-900 object-fill
             md:max-h-80 md:min-h-[14rem] md:min-w-[22rem]"
            loading="lazy"
          />
        </figure>

        <section className="mt-4 flex flex-col items-start justify-center">
          <h1 className="text-1xl font-bold text-secondary md:text-2xl">
            {tittle}
          </h1>
          <p className=" text-xs text-primary-400 md:text-sm">{description}</p>
          <Link
            href={href}
            target="_blank"
            className="mt-2 flex items-center justify-center gap-2 text-xs text-secondary md:text-sm
              "
          >
            Ver projeto <BsArrowUpRight className="h-4 w-4 text-secondary" />
          </Link>
        </section>
      </article>
    </section>
  )
}

export default CardProjects
