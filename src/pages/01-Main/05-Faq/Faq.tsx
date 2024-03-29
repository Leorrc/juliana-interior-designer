import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaAngleDown } from 'react-icons/fa'
import { Eyebrow } from '../../../components/commons/Eyebrow'

export function Faq() {
  const [isActive, setIsActive] = useState(false)

  return (
    <div>
      <div id="faq"></div>
      <section className="sectionS overflow-hidden bg-bege-600 md:py-40">
        <header className="mx-6 mb-12">
          <Eyebrow>PERGUNTAS FREQUENTES</Eyebrow>
        </header>
        <div className="mx-5 grid gap-8 md:mx-auto md:max-w-3xl">
          <details>
            <motion.summary
              onClick={() => setIsActive(!isActive)}
              className="flex list-none justify-between"
            >
              Como faço para agendar atendimento?
              <motion.span
                onClick={() => setIsActive(!isActive)}
                animate={{
                  rotate: isActive ? 180 : 0,
                }}
              >
                <FaAngleDown />
              </motion.span>
            </motion.summary>
            <p className="mt-2 text-base font-normal text-black">
              Você pode entrar em contato comigo através do whatsapp ou se
              preferir, enviar um e-mail.
            </p>
          </details>

          <details>
            <motion.summary
              onClick={() => setIsActive(!isActive)}
              className="flex list-none justify-between"
            >
              Como solicitar o orçamento?
              <motion.span
                onClick={() => setIsActive(!isActive)}
                animate={{
                  rotate: isActive ? 180 : 0,
                }}
              >
                <FaAngleDown />
              </motion.span>
            </motion.summary>
            <p className="mt-2 text-base font-normal text-black">
              Para iniciar o orçamento o cliente deve apresentar planta baixa
              com medidas gerais, foto ou vídeo do(s) ambiente(s). Além de,
              listar as principais necessidades a serem efetuadas.
            </p>
          </details>
        </div>
      </section>
      <div className="divider-2"></div>
    </div>
  )
}
