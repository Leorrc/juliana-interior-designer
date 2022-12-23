import kk from '/images/Logos/logoFooter.png'

export function Footer() {
  return (
    <>
      <footer className="bg-cinza-100 mx-auto xl:px-20 lg:px-12 sm:px-6 px-4 py-12">
        <div className="grid gap-8">
          <div className="max-w-xs mx-auto">
            <img className="" src={kk}></img>
          </div>
          <hr className="w-full block bg-white" />
          <div className="mx-auto">
            <p className="text-bege-100">
              © 2022 Site desenvolvido por{' '}
              <a
                className="font-semibold"
                href="https://my-page-silk.vercel.app/"
                target="_blank"
              >
                Leonardo Carvalho DEV
              </a>
            </p>
          </div>
        </div>
      </footer>
    </>
  )
}
