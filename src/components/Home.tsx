import { Fade } from 'react-awesome-reveal'
import { Slide, Slider, SliderProps } from './Slider'

import imgHero from '../../public/works/logo-hero.png'
import luz from '../../public/works/luz.png'

const CustonButton = `self-start inline-block w-auto px-8 py-4 mx-auto mt-0 text-white font-bold bg-card border-t border-gray-200 rounded-md shadow-xl sm:mt-1 fold-bold lg:mr-0`

export function Home() {
  const settings: SliderProps = {
    spaceBetween: 100,
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
    <section className="h-screen bg-hero-pattern bg-cover py-44 overflow-hidden lg:py-56">
      <div className="hidden w-64 h-64 right-16 top-16 lg:flex lg:absolute animate-spin-slow order-3 ">
        <img src={imgHero} alt="" />
      </div>

      <Fade direction="down">
        <div className="container mx-auto grid gap-8 lg:gap-24 lg:grid-flow-col lg:justify-between ">
          <div className="mx-4 text-center md:order-1 lg:text-left lg:max-w-sm">
            <h1 className="font-bold text-8xl text-white mb-4 ">
              Juliana Dal Col
            </h1>
            <p className="mb-8 text-white/80">
              O design de interiores vai muito além do que os olhos podem ver, é
              a concretização de um sonho. É algo pessoal e único. É projetar a
              vida como ela realmente é. Seja bem vindo, surpreenda-se!
            </p>
            <a href="#" className={CustonButton}>
              Contato
            </a>
          </div>
          <div className="overflow-hidden order-1 w-full ">
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
          </div>
        </div>
      </Fade>
    </section>
  )
}
