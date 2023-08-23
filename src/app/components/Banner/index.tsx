import Image from 'next/image'
import banner from '@/assets/banner.png'

const Banner = () => {
  return (
    <section className="bg-gradient-center container flex flex-col items-center justify-center overflow-hidden py-10 md:py-20 ">
      <article className="flex w-full flex-col items-center justify-center">
        <section className="flex flex-col items-center justify-center">
          <h1 className="flex flex-col items-center justify-center text-xl font-bold text-primary-400 sm:text-4xl md:text-5xl">
            Junte-se á revolução
            <span>da programação!</span>
          </h1>
        </section>

        <p className="mt-4 flex flex-col items-center justify-center px-14 text-center text-xs text-secondary-50 sm:text-base md:mt-8 md:p-0 md:text-xl">
          Faça parte do Juniors Developers Group:
          <span>onde o talento é voluntário e a inovação é infinita!</span>
        </p>
      </article>

      <figure className="relative w-[85%] ">
        <Image
          src={banner}
          alt="banner-image"
          className="h-full w-full object-cover"
        />
        <div className="pointer-events-none absolute inset-0 z-50 bg-gradient-to-b from-transparent to-shadow"></div>
      </figure>
    </section>
  )
}

export default Banner
