'use client'
import { useState } from 'react'
import { Vacancies } from '@/mocks/Vacancies'
import CardVacancies from '../CardVacancies'
import VacanciesHeader from '../VacanciesHeader'
import VacancieDropdown from '../VacancieDropdown'
import { VacancieInputFilter } from '../VacancieInputFilter'

const VacanciesPage = () => {
  const [searchText, setSearchText] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('')

  const filteredVacancies = Vacancies.filter((vacancie) => {
    const categoryMatch =
      !selectedCategory || vacancie.category === selectedCategory
    const textMatch =
      !searchText ||
      (typeof searchText === 'string' &&
        vacancie.title.toLowerCase().includes(searchText.toLowerCase()))

    return categoryMatch && textMatch
  })

  const handleCategorySelect = (categoryName: string) => {
    setSelectedCategory(categoryName)
    setSearchText('')
  }

  const handleInputFilter = (input: string) => {
    setSearchText(input)
    setSelectedCategory('')
  }

  return (
    <section
      data-testid="vacancies-page"
      className="container flex flex-col items-center justify-center px-4 md:px-20"
    >
      <VacanciesHeader />
      <section className="mb-10 mt-20 flex w-full flex-col items-end justify-between gap-4 md:flex-row md:items-center">
        <VacancieInputFilter
          value={searchText}
          onChange={(e) => handleInputFilter(e.target.value)}
        />
        <VacancieDropdown handleCategorySelect={handleCategorySelect} />
      </section>

      <section className="flex w-full flex-col items-center justify-center md:flex-row md:flex-wrap md:justify-between">
        {filteredVacancies &&
          filteredVacancies.map((vacancie) => (
            <CardVacancies key={vacancie.id} {...vacancie} />
          ))}
      </section>
    </section>
  )
}

export default VacanciesPage
