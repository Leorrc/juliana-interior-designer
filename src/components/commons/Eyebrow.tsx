import { ReactNode } from 'react'

interface Props {
  children?: ReactNode
}

export function Eyebrow({ children }: Props) {
  return (
    <div className="flex flex-row items-center">
      <hr className="w-16 border-t-1 border-t-baseCinza"></hr>
      <p className="text-2xl font-semibold tracking-widest text-baseCinza pl-4">
        <h1 className="text-baseVerde font-bold text-xl uppercase">
          {children}
        </h1>
      </p>
    </div>
  )
}
