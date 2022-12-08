import kk from '/Logos/logoFooter.svg'

export function Footer() {
  return (
    <>
      <footer className="bg-cinza-100 mx-auto xl:px-20 lg:px-12 sm:px-6 px-4 py-12">
        <div className="grid gap-8">
          <div className="max-w-xs mx-auto">
            <img className="w-full h-full" src={kk}></img>
          </div>
          <hr className="w-full block bg-white" />
          <p className="text-bege-100 mx-auto">
            © 2022 Site desenvolvido por{' '}
            <span className="font-semibold cursor-pointer">
              Leonardo Carvalho DEV
            </span>
          </p>
        </div>
      </footer>
    </>
  )
}
