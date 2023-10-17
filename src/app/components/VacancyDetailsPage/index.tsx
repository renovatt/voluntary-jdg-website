'use client'
import Input from '../Input'
import { useCallback } from 'react'
import { toast } from 'react-toastify'
import { BsArrowLeft } from 'react-icons/bs'
import { useRouter } from 'next/navigation'
import { vacancyFormPropsSchema } from '@/zod'
import { AiFillGithub } from 'react-icons/ai'
import { MdOutlineEmail } from 'react-icons/md'
import { FiPhone, FiLinkedin } from 'react-icons/fi'
import { HiOutlineUserCircle } from 'react-icons/hi'
import { useForm, FormProvider } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { CardVacanciesProps, VacancyFormProps } from './types'

export default function VacancyCardPage({
  description,
  techs,
  date,
  title,
}: CardVacanciesProps) {
  const methods = useForm<VacancyFormProps>({
    mode: 'all',
    reValidateMode: 'onChange',
    resolver: zodResolver(vacancyFormPropsSchema),
  })

  const onSubmit = (data: VacancyFormProps) => {
    if (data) {
      toast.success('Candidatura realizada com sucesso')
      methods.reset()
    }
  }

  const route = useRouter()
  const handleBack = useCallback(() => {
    route.back()
  }, [route])

  return (
    <section className="container flex flex-col items-center justify-center gap-5">
      <BsArrowLeft
        onClick={handleBack}
        className="my-10 h-12 w-12 self-start rounded-full border border-secondary-500 border-opacity-30 p-2 text-secondary-50 transition-all ease-in-out hover:cursor-pointer hover:border-opacity-100"
      />
      <section className="flex w-full flex-col items-center justify-center gap-6 overflow-hidden rounded-lg border border-primary-400 bg-primary-900 p-8 xl:h-96">
        <span className="self-start rounded-lg bg-primary-800 p-2 text-xs text-secondary">
          Estamos procurando um novo
        </span>

        <article className="mt-4 flex w-full flex-col items-start xl:flex-row xl:justify-between">
          <div>
            <h1 className="text-xl font-semibold tracking-wider text-secondary">
              {title}
            </h1>
            {techs.map((tech, index) => (
              <span
                key={tech.id}
                data-tech={tech.name}
                className="relative p-2 text-xs tracking-wider text-primary-400"
              >
                {tech.name}
                {index < techs.length - 1 && (
                  <span className="absolute top-[5.5px] pl-[5.5px] text-primary-400">
                    .
                  </span>
                )}
              </span>
            ))}
          </div>
          <span className="mt-5 text-xs text-secondary-50 xl:m-0 xl:text-base">
            Inscrições até {date}
          </span>
        </article>

        <p className="text-base leading-8 tracking-wide text-secondary-500">
          {description}
        </p>
      </section>

      <section className="mt-10 w-full bg-secondary-880 px-4 py-16 xl:px-6">
        <span className="flex h-16 w-full gap-5 border border-x-transparent border-b-secondary-100 border-t-transparent">
          <h1 className=" text-2xl text-secondary-50 xl:text-xxl">
            Voluntariar-se
          </h1>
        </span>

        <FormProvider {...methods}>
          <form
            onSubmit={methods.handleSubmit(onSubmit)}
            className="mt-10 w-full"
          >
            <fieldset className="flex flex-col justify-around">
              <section className="space-y-10">
                <Input
                  type="text"
                  name="name"
                  label="Nome completo"
                  icon={HiOutlineUserCircle}
                  placeholder="Ana Clara Araujo"
                />

                <Input
                  type="email"
                  name="email"
                  label="Email"
                  icon={MdOutlineEmail}
                  placeholder="anaclara@gmail.com"
                />
                <Input
                  type="text"
                  name="cellphone"
                  label="Telefone"
                  icon={FiPhone}
                  placeholder="(64) 9 8135-2900"
                />

                <section className="flex flex-col gap-8 md:flex-row">
                  <Input
                    type="text"
                    name="linkedin"
                    label="Likedin"
                    icon={FiLinkedin}
                    placeholder="www.linkedin.com/in/anaclaraaraujoa"
                  />
                  <Input
                    type="text"
                    name="github"
                    label="Github"
                    icon={AiFillGithub}
                    placeholder="https://github.com/anaclaraaraujo"
                  />
                </section>
              </section>

              <button
                type="submit"
                className="bg-gradient-btn mt-20 flex h-14 w-full cursor-pointer items-center justify-center rounded-lg border border-primary text-secondary-50 transition-all duration-300 hover:opacity-80"
              >
                Enviar
              </button>
            </fieldset>
          </form>
        </FormProvider>
      </section>
    </section>
  )
}
