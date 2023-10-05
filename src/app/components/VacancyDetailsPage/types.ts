import { z } from 'zod'
import { vacancyFormPropsSchema } from '@/zod'

export type CardVacanciesProps = {
  id: number
  title: string
  techs: {
    id: number
    name: string
  }[]
  category: string
  description: string
  date: string
}

export type VacancyFormProps = z.infer<typeof vacancyFormPropsSchema>
