import React, { useState } from 'react'
import { motion } from 'framer-motion'

import { FaAngleDown } from 'react-icons/fa'
import { Eyebrow } from '../commons/Eyebrow'

export function Faq() {
  const [isActive, setIsActive] = React.useState(false)

  return (
    <div>
      <section className="sectionS overflow-hidden bg-bege-600   md:py-40">
        <header className="mx-6 mb-12">
          <Eyebrow>PERGUNTAS FREQUENTES</Eyebrow>
        </header>
        <div className="mx-5 grid gap-8 md:max-w-3xl md:mx-auto">
          <details>
            <motion.summary
              onClick={() => setIsActive(!isActive)}
              className="list-none flex justify-between"
            >
              Como faço para agendar atendimento?
              <motion.span
                onClick={() => setIsActive(!isActive)}
                animate={{
                  rotate: isActive ? 180 : 0
                }}
              >
                <FaAngleDown />
              </motion.span>
            </motion.summary>
            <p className="mt-2 font-normal text-base text-black">
              Você pode entrar em contato comigo através do whatsapp ou se
              preferir, enviar um e-mail.
            </p>
          </details>

          <details>
            <motion.summary
              onClick={() => setIsActive(!isActive)}
              className="list-none flex justify-between"
            >
              Como solicitar o orçamento?
              <motion.span
                onClick={() => setIsActive(!isActive)}
                animate={{
                  rotate: isActive ? 180 : 0
                }}
              >
                <FaAngleDown />
              </motion.span>
            </motion.summary>
            <p className="mt-2 font-normal text-base text-black">
              Para iniciar o orçamento o cliente deve apresentar planta baixa
              com medidas gerais, foto ou vídeo do(s) ambiente(s). Além de,
              listar as principais necessidades a serem efetuadas.
            </p>
          </details>

          <details>
            <motion.summary
              onClick={() => setIsActive(!isActive)}
              className="list-none flex justify-between"
            >
              O orçamento é pago?
              <motion.span
                onClick={() => setIsActive(!isActive)}
                animate={{
                  rotate: isActive ? 180 : 0
                }}
              >
                <FaAngleDown />
              </motion.span>
            </motion.summary>
            <p className="mt-2 font-normal text-base text-black">
              Não. O orçamento é enviado online após o primeiro contato com o
              cliente, no prazo de 01 dia útil, contendo todas as informações
              necessárias para início do projeto.
            </p>
          </details>
        </div>
      </section>
      <div className="divider-2"></div>
    </div>
  )
}
