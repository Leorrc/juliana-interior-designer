import { Button } from '@material-tailwind/react'
import Logo from '../images/logos/logo-dark.svg'

export function HeaderTest() {
  const navigation = [
    { name: 'Sobre mim', href: '#' },
    { name: 'Portfólio', href: '#' },
    { name: 'Blog', href: '#' }
  ]
  return (
    <header className="bg-bege-500">
      <div className="container mx-auto">
        <div className="flex py-5 justify-between items-center">
          <div className="flex flex-row gap-8 items-center">
            <div>
              <img className="h-8 w-auto" src={Logo} alt="Logo" />
            </div>
          </div>
          <div className="flex flex-row gap-6 hover:transition-colors">
            <div className="md:flex hidden flex-row gap-4 items-center">
              {navigation.map(item => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-body-md font-medium text-neutral-700 hover:text-primary-600 px-4 transition duration-300 focus:outline-none focus:text-gray-800-500 focus:underline hover:underline "
                >
                  {item.name}
                </a>
              ))}
            </div>
            <button
              type="button"
              className="bg-transparent hover:bg-musgo-500 text-pele-400 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded hover:ease-out duration-300"
            >
              Contato
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
