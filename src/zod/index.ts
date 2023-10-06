import { z } from 'zod'

export const vacancyFormPropsSchema = z.object({
  name: z
    .string({ required_error: 'Nome obrigatório' })
    .min(10, 'Nome obrigatório'),
  email: z.string().email('Precisa ser um email válido'),
  cellphone: z.string().min(9, 'Número obrigatório'),
  linkedin: z.string().url('Precisa ser email válido'),
  github: z.string().url('Precisa ser email válido'),
})
