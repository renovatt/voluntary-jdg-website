const VacanciesHeader = () => {
  return (
    <header
      data-testid="vacancies-header-text"
      className="mt-10 flex flex-col items-center justify-center"
    >
      <h1 className="my-4 flex flex-col items-center justify-center text-xl font-bold tracking-wider text-primary-400 md:text-3xl">
        Encontre sua vaga<span>voluntária aqui!</span>
      </h1>
      <h2 className="flex flex-col items-center justify-center text-xs tracking-wider text-white md:text-base">
        Faça parte do Juniors Developers Group:{' '}
        <span>onde o talento é voluntário e a inovação é infinita!</span>
      </h2>
    </header>
  )
}

export default VacanciesHeader
