import { VacancyMock } from '@/mocks/VacancyMock'
import VacancyCardPage from '@/app/components/VacancyDetailsPage'

export default function Vacancy() {
  return (
    <VacancyCardPage
      id={VacancyMock.id}
      title={VacancyMock.title}
      techs={VacancyMock.techs}
      date={VacancyMock.createdAt}
      category={VacancyMock.category}
      description={VacancyMock.description}
    />
  )
}
