import { Slider, SliderProps, Slide } from './Slider'
import logoHero from '../../public/works/logo-hero.png'

export function Hero() {
  const settings: SliderProps = {
    spaceBetween: 50,
    slidesPerView: 1,
    navigation: true,
    pagination: {
      clickable: true
    },
    autoplay: {
      delay: 4000,
      disableOnInteraction: false
    }
  }

  return (
    <>
      <section className="min-h-screen overflow-hidden  bg-hero-pattern bg-cover bg-center py-40">
        <div className="mx-6 grid gap-8 sm:max-w-5xl sm:grid-flow-col sm:justify-between sm:mx-auto">
          <img src={logoHero} className="w-80 h-80 items-center" />
          <div className="order-2 max-w-sm">
            <div className="flex text-center flex-col bg-card rounded-3xl bg-opacity-80 max-w-[682px] max-h-[530px] ">
              <h1 className="font-display2 text-white text-display-hero not-italic  ">
                Juliana Dal Col
              </h1>
              <p className="col-span-8 md:text-body-xl text-body-lg font-light text-neutral-600">
                O design de interiores vai muito além do que os olhos podem ver,
                é a concretização de um sonho. É algo pessoal e único. É
                projetar a vida como ela realmente é. Seja bem vindo,
                surpreenda-se!
              </p>
              <button
                type="button"
                className="mt-4 bg-base0 text-brown-100 hover:bg-gray-600 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded hover:ease-out duration-300"
              >
                Contato
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

{
  /* <div className="md:mt-20 md:pb-12 mt-12 pb-12">
          <hr className="text-neutral-300"></hr>
        </div>
         */
}

{
  /* <div className="order-1 w-full max-w-md">
            <Slider settings={settings}>
              <Slide>
                <img src="/src/images/ImageSliders/1ACADEMIA.jpg" />
              </Slide>
              <Slide>
                <img src="/src/images/ImageSliders/2AREAEXTERNA.jpg" />
              </Slide>
              <Slide>
                <img src="/src/images/ImageSliders/3DORMITÓRIO.jpg" />
              </Slide>
              <Slide>
                <img src="/src/images/ImageSliders/4ESPAÇOGOURMET.jpg" />
              </Slide>
              <Slide>
                <img src="/src/images/ImageSliders/5LIVING.jpg" />
              </Slide>
            </Slider>
          </div> */
}
