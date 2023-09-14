import { ReactNode } from 'react'

interface Props {
  children?: ReactNode
}

export function Eyebrow({ children }: Props) {
  return (
    <div className="flex flex-row items-center gap-4">
      <hr className="border-t-1 w-16 border-t-baseCinza"></hr>
      <h2 className="text-xl font-bold uppercase text-baseVerde">{children}</h2>
    </div>
  )
}
