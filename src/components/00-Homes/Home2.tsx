import { Fade } from 'react-awesome-reveal'
import { Slide, Slider, SliderProps } from '../Slider1'
import { BsWhatsapp } from 'react-icons/bs'

import imgHero from '../../../public/works/logo-hero.png'
import luz from '../../public/works/luz.png'

const CustonButton = `
  self-start 
  inline-block 
  w-auto px-8 py-4 
  mx-auto mt-0 text-white
  font-bold bg-card border-t
  border-gray-200 rounded-md 
  shadow-xl sm:mt-1 fold-bold 
  lg:mr-0`

const ImgLoop = `
  hidden 
  animate-spin-slow 
  md:absolute
  md:flex
  md:w-[300px]
  md:h-[300px]
  md:right-[1rem]
  md:top-[3rem]
  lg:w-[500px]
  lg:h-[500px]
  lg:right-[17rem]
  lg:top-[2rem]
  `

export function Home2() {
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
    <section className="bg-mobile bg-cover py-56 mx-auto md:bg-home2 lg:h-screen">
      {/* <div className={ImgLoop}>
        <img src={imgHero} alt="" />
      </div> */}

      <Fade direction="left">
        <div className="grid mx-auto px-3 max-w-3xl  md:text-left lg:max-w-6xl lg:pt-20">
          <h1 className="text-7xl tracking-normal font-extrabold text-white sm:text-5xl md:text-6xl ">
            Juliana <span className="text-base1">Dal Col</span>
          </h1>
          <p className="mt-3 text-xl text-gray-500 md:mt-5 md:text-xl lg:mx-0 lg:max-w-xl">
            Designer de Interiores <br />
            <span className="text-md text-base0 font-extrabold grid mt-3 ">
              {' '}
              Seja bem vindo, surpreenda-se!
            </span>
          </p>
          <div className="b  mt-6  h-16 w-64 flex justify-center items-center lg:ml-0">
            <div className=" h-16 w-64 bg-base3 items-center rounded-2xl shadow-2xl cursor-pointer absolute overflow-hidden transform hover:scale-x-110 hover:scale-y-105 transition duration-300 ease-out"></div>
            <a className="text-center text-lg flex justify-center gap-3 items-center text-white font-bold z-10 pointer-events-none">
              <i>
                <BsWhatsapp className="text-[1.5rem] text-white" />
              </i>
              Contato
            </a>
          </div>
        </div>
      </Fade>
    </section>
  )
}

// <div className="mt-8 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
//   <button className="bg-base3 transition-all gap-3 h-14 inline-flex items-center py-0 px-8 rounded">
//     <a href="#" className="text-white font-bold">
//       Contato
//     </a>
//     <i>
//       <BsWhatsapp className="text-[1.5rem] text-white" />
//     </i>
//   </button>
