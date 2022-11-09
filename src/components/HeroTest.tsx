import { Slider, SliderProps, Slide } from './Slider'

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
      <section className="container mx-auto 2xl mt-11 ">
        <div className="flex flex-col xl:px-32 items-center text-center gap-6 ">
          <h1 className="font-display text-display-2xl">
            Juliana <span className=" text-marrom-400">Dal Col </span>
          </h1>
          <p className="col-span-8 md:text-body-xl text-body-lg font-light text-neutral-700 max-w-[800px]">
            Transformamos sua casa vazia em um lar encantador, tornando os
            espaços compactos com móveis que economizam espaço. Tornando os seus
            gostos únicos em realidade!
          </p>
        </div>
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
        <div className="md:mt-20 md:pb-12 mt-12 pb-12">
          <hr className="text-neutral-300"></hr>
        </div>
      </section>
    </>
  )
}
