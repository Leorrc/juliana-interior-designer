import React from 'react'
import { useState } from 'react'
import img1 from '/ImgProject/Mudar/1dormitorio.webp'

interface CardProps {
  imgUrl: string
  title: string
  onClick: () => void
}

export function CardProject({ imgUrl, title, onClick }: CardProps) {
  return (
    <>
      <button onClick={onClick}>
        <div className="zoom shadow-lg rounded-lg relative overflow-hidden bg-no-repeat bg-cover ">
          <img
            src={imgUrl}
            className="w-full h-64 transition duration-300 ease-linear align-middle"
          />

          <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed">
            <div className="flex justify-start items-end h-full">
              <h5 className="text-lg font-bold text-white m-6">{title}</h5>
            </div>
          </div>
        </div>
      </button>
    </>
  )
}
