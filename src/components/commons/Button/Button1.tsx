import { FaWhatsapp } from 'react-icons/fa'

interface Props {
  children: string
}

export function Button1({ children }: Props) {
  return (
    <>
      <button
        className="hidden 
      md:flex 
      p-4 
      uppercase 
      rounded-md
      bg-twice 
      border
      hover:shadow-lg
       hover:bg-transparent 
       transition-colors 
       text-baseCinza 
       hover:text-twice
       hover:border
       text-base 
       font-semibold
       items-center
       gap-2
       "
      >
        <FaWhatsapp className="text-2xl" />
        {children}
      </button>
    </>
  )
}
