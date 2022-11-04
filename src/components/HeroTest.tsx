import React from 'react'
import imgHero1 from '../images/logos/hero1.svg'
import imgHero2 from '../images/logos/hero2.svg'
import imgHero3 from '../images/logos/hero3.svg'

export function HeroTest() {
  return (
    <>
      <div className="container mx-auto 2xl">
        <div className="flex flex-col xl:px-32 items-center text-center gap-6 py-20">
          <h1 className="font-display text-2xl text-display-lg">
            Juliana <span className="italic text-primary-600">Designer </span>
            <span className="italic text-primary-300">Interiores</span>
          </h1>
          <p className="col-span-8 md:text-body-xl text-body-lg font-light text-neutral-700 max-w-[800px]">
            We turn your empty house to a lovely home, making the compact spaces
            with sapce saving furnitures. Making the unique tastes of yours into
            reality!{' '}
          </p>
        </div>
      </div>
      <div>
        <img
          className="bg-cover bg-no-repeat bg-center w-full h-full"
          src={imgHero3}
          alt=""
        />
      </div>
    </>
  )
}
