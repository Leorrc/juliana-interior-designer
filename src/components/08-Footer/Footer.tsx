// eslint-disable-next-line import/no-absolute-path
import kk from '/images/Logos/logoFooter.png'

export function Footer() {
  return (
    <>
      <footer className="mx-auto bg-cinza-100 px-4 py-12 sm:px-6 lg:px-12 xl:px-20">
        <div className="grid gap-8">
          <div className="mx-auto max-w-xs">
            <img src={kk} alt="Logo Footer" />
          </div>
          <hr className="block w-full bg-white" />
          <div className="mx-auto">
            <p className="text-bege-100">
              © 2023 Site desenvolvido por{' '}
              <a
                className="font-semibold"
                href="https://leocarvalhodev.com.br/"
                target="_blank"
                rel="noreferrer"
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
