import { FaqSessionButtonProps } from './types'
import { XMarkIcon, PlusIcon } from '@heroicons/react/24/outline'

const FaqSessionButton = ({
  question,
  isOpen,
  onClick,
}: FaqSessionButtonProps) => (
  <button
    onClick={onClick}
    className={`mb-4 flex w-full flex-col items-start justify-start border border-primary border-x-transparent transition-all md:mb-2 ${
      isOpen ? 'border-b' : 'border-b-transparent'
    }`}
  >
    <h2 className="flex w-full items-center justify-between p-2 text-start text-base font-semibold text-secondary">
      {question}
      <span className="m-2">
        {isOpen ? (
          <XMarkIcon
            className="h-5 w-5 text-secondary"
            data-testid="xMarkIcon"
          />
        ) : (
          <PlusIcon className="h-5 w-5 text-secondary" data-testid="PlusIcon" />
        )}
      </span>
    </h2>
  </button>
)

export default FaqSessionButton
