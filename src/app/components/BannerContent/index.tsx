const BannerContent = () => {
  return (
    <article className="flex w-full flex-col items-center justify-center">
      <section className="flex flex-col items-center justify-center">
        <h1 className="flex flex-col items-center justify-center text-xl font-bold text-primary-400 sm:text-4xl md:text-5xl">
          Junte-se à revolução
          <span>da programação!</span>
        </h1>
      </section>
      <p className="mt-4 flex flex-col items-center justify-center px-14 text-center text-xs text-secondary-50 sm:text-base md:mt-8 md:p-0 md:text-xl">
        Faça parte do Juniors Developers Group:
        <span>onde o talento é voluntário e a inovação é infinita!</span>
      </p>
    </article>
  )
}

export default BannerContent
