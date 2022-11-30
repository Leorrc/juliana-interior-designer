import { ReactNode } from 'react'

interface Props {
  children?: ReactNode
}

export function Eyebrow({ children }: Props) {
  return (
    <div className="flex flex-row items-center opacity-80 pb-4">
      <hr className="w-16 text-cor2"></hr>
      <p className="text-body-sm font-semibold tracking-widest text-cor2 pl-4">
        <h1 className="text-verde font-bold text-xl uppercase">{children}</h1>
      </p>
    </div>
  )
}
