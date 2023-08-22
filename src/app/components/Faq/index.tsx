'use client'

import { OpenStates } from './types'
import { Fragment, useState } from 'react'
import FaqSessionButton from '../FaqSessionButton'
import FaqSessionContent from '../FaqSessionContent'
import { FAQSessionsMock } from '@/mocks/FAQSessions'

const Faq = () => {
  const [openStates, setOpenStates] = useState<OpenStates>({})

  const toggleSession = (sessionId: number) => {
    setOpenStates((prevOpenStates) => ({
      ...prevOpenStates,
      [sessionId]: !prevOpenStates[sessionId],
    }))
  }

  return (
    <section className="container bg-primary px-4 md:px-20">
      <h1 className="mb-8 w-8 border border-transparent border-b-primary font-bold text-secondary">
        FAQ
      </h1>

      <article className="flex flex-col items-center justify-center">
        {FAQSessionsMock.map((session) => (
          <Fragment key={session.id}>
            <FaqSessionButton
              question={session.question}
              isOpen={!!openStates[session.id]}
              onClick={() => toggleSession(session.id)}
            />
            {openStates[session.id] && (
              <FaqSessionContent content={session.content} />
            )}
          </Fragment>
        ))}
      </article>
    </section>
  )
}

export default Faq
