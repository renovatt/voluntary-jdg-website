import { InputProps } from './types'
import { useFormContext } from 'react-hook-form'
import { ErrorMessage } from '../ErrorMessageForm'

export default function Input({
  icon: Icon,
  label,
  name,
  placeholder,
  type,
}: InputProps) {
  const { register } = useFormContext()
  return (
    <div className="flex w-full flex-col">
      <label
        htmlFor={name}
        className="mb-3 text-xs text-secondary-50 hover:cursor-pointer"
      >
        {label}
        <span className="text-base text-primary">*</span>
      </label>

      <div className="flex h-14 items-center justify-center rounded-lg bg-secondary-920">
        <Icon className="mx-6 h-5 w-5 text-secondary-50" />

        <input
          {...register(name)}
          id={name}
          type={type}
          placeholder={placeholder}
          className="w-full bg-transparent pr-5 text-xs text-secondary-50 focus:outline-none md:text-base"
        />
      </div>
      <ErrorMessage field={name} />
    </div>
  )
}
